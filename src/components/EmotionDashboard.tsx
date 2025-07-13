import React, { useEffect, useState } from 'react';
import { format, subDays } from 'date-fns';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { supabase } from '../lib/supabase';
import { Calendar, ChevronDown } from 'lucide-react';

interface EmotionData {
  id: string;
  user_id: string;
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  sad: number;
  surprise: number;
  neutral: number;
  captured_at: string;
}

const EMOTIONS = ['angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral'];
const COLORS = {
  angry: '#ff4d4d',
  disgust: '#8b4513',
  fear: '#800080',
  happy: '#ffeb3b',
  sad: '#3f51b5',
  surprise: '#ff9800',
  neutral: '#9e9e9e'
};

const TIME_RANGES = {
  '24h': 1,
  '7d': 7,
  '30d': 30,
  '90d': 90
};

export default function EmotionDashboard() {
  const [data, setData] = useState<EmotionData[]>([]);
  const [timeRange, setTimeRange] = useState<keyof typeof TIME_RANGES>('24h');
  const [isLoading, setIsLoading] = useState(true);
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const startDate = subDays(new Date(), TIME_RANGES[timeRange]);
      
      const { data: emotionData, error } = await supabase
        .from('e_score')
        .select('*')
        .gte('captured_at', startDate.toISOString())
        .order('captured_at', { ascending: true });

      if (error) {
        console.error('Error fetching emotion data:', error);
        return;
      }

      setData(emotionData || []);
      setIsLoading(false);
    };

    fetchData();

    // Set up real-time subscription
    const subscription = supabase
      .channel('e_score_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'e_score' 
        }, 
        (payload) => {
          // Refresh data when changes occur
          fetchData();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [timeRange]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const latestData = data[data.length - 1];
  const emotionSummary = latestData ? EMOTIONS.map(emotion => ({
    name: emotion.charAt(0).toUpperCase() + emotion.slice(1),
    value: latestData[emotion as keyof typeof latestData],
  })) : [];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Emotion Analytics</h2>
        
        <div className="relative inline-block">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            onClick={() => setShowTimeRangeDropdown(!showTimeRangeDropdown)}
          >
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Last {timeRange}</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
          
          {showTimeRangeDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              {Object.keys(TIME_RANGES).map((range) => (
                <button
                  key={range}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setTimeRange(range as keyof typeof TIME_RANGES);
                    setShowTimeRangeDropdown(false);
                  }}
                >
                  Last {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8">
        <div className="h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Emotion Trends Over Time</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="captured_at" 
                tickFormatter={(date) => format(new Date(date), 'MM/dd HH:mm')}
                stroke="#6b7280"
              />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                labelFormatter={(date) => format(new Date(date), 'MM/dd/yyyy HH:mm')}
                contentStyle={{ background: 'white', border: '1px solid #e5e7eb' }}
              />
              <Legend />
              {EMOTIONS.map((emotion) => (
                <Line
                  key={emotion}
                  type="monotone"
                  dataKey={emotion}
                  name={emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                  stroke={COLORS[emotion as keyof typeof COLORS]}
                  dot={false}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Current Emotion Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={emotionSummary}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ background: 'white', border: '1px solid #e5e7eb' }}
              />
              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}