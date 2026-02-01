import { useState, useEffect, useRef } from 'react';
import { Match, Message } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MOCK_MESSAGES, MOCK_USERS } from '@/lib/mockData';
import { ICEBREAKERS } from '@/constants';
import { Send, Lightbulb, Calendar, MapPin, Briefcase } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'sonner';

interface ChatViewProps {
  match: Match;
}

export default function ChatView({ match }: ChatViewProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showIcebreakers, setShowIcebreakers] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load messages for this match
    const saved = localStorage.getItem(`messages_${match.id}`);
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      // Use mock messages for demo
      const mockMsgs = MOCK_MESSAGES.filter(m => m.matchId === match.id);
      setMessages(mockMsgs);
    }
  }, [match.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    console.log('Sending message:', newMessage);

    const message: Message = {
      id: `msg_${Date.now()}`,
      matchId: match.id,
      senderId: 'current',
      content: newMessage,
      timestamp: new Date(),
      read: false,
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem(`messages_${match.id}`, JSON.stringify(updatedMessages));
    setNewMessage('');

    // Simulate response after 2 seconds
    setTimeout(() => {
      const responses = [
        "That sounds interesting! Tell me more.",
        "I'd love to discuss this further. When are you free?",
        "Great point! I've been thinking about that too.",
        "Thanks for sharing! Let's schedule a call to dive deeper.",
      ];
      
      const response: Message = {
        id: `msg_${Date.now()}`,
        matchId: match.id,
        senderId: match.user.id,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        read: false,
      };

      const withResponse = [...updatedMessages, response];
      setMessages(withResponse);
      localStorage.setItem(`messages_${match.id}`, JSON.stringify(withResponse));
    }, 2000);
  };

  const handleIcebreaker = (icebreaker: string) => {
    setNewMessage(icebreaker);
    setShowIcebreakers(false);
  };

  const handleScheduleCall = () => {
    toast.success('Meeting link copied!', {
      description: 'Share this with your match: meet.google.com/abc-defg-hij',
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={match.user.photo}
              alt={match.user.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">{match.user.name}</p>
                {match.user.verified && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="h-3 w-3" />
                  {match.user.role}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {match.user.location}
                </span>
              </div>
            </div>
          </div>
          
          <Button size="sm" variant="outline" onClick={handleScheduleCall}>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Call
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Match notification */}
        <div className="text-center">
          <div className="inline-block bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
            You matched {formatDistanceToNow(new Date(match.matchedAt), { addSuffix: true })}
          </div>
        </div>

        {/* Profile Preview */}
        <div className="bg-accent/50 rounded-xl p-4 mb-4">
          <p className="text-sm font-medium mb-2">About {match.user.name}</p>
          <p className="text-sm text-muted-foreground mb-3">{match.user.bio}</p>
          <div className="flex flex-wrap gap-2">
            {match.user.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Messages */}
        {messages.map((message) => {
          const isOwn = message.senderId === 'current';
          return (
            <div
              key={message.id}
              className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  isOwn
                    ? 'gradient-primary text-white'
                    : 'bg-muted text-foreground'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    isOwn ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                >
                  {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Icebreakers */}
      {showIcebreakers && (
        <div className="px-4 py-3 border-t bg-muted/30">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-primary" />
            <p className="text-sm font-medium">Conversation Starters</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ICEBREAKERS.slice(0, 4).map((icebreaker) => (
              <Button
                key={icebreaker}
                variant="outline"
                size="sm"
                className="text-xs h-auto py-2 px-3 whitespace-normal text-left justify-start"
                onClick={() => handleIcebreaker(icebreaker)}
              >
                {icebreaker}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowIcebreakers(!showIcebreakers)}
          >
            <Lightbulb className={`h-5 w-5 ${showIcebreakers ? 'text-primary' : ''}`} />
          </Button>
          
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          
          <Button
            size="icon"
            className="gradient-primary text-white"
            onClick={handleSend}
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
