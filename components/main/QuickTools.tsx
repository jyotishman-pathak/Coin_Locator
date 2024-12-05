
import { Rocket, Coins, Trophy, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const tools = [
  { icon: Rocket, title: 'Cryptocurrencies', description: 'Explore and trade the top digital assets'  },
  { icon: Rocket, title: 'Tool', description: 'Essential trading tools' },
  { icon: Coins, title: 'Buyback', description: 'Token buyback program' },
  { icon: Trophy, title: 'Lottery', description: 'Daily crypto lottery' },
  { icon: TrendingUp, title: 'Staking & Level Up', description: 'Earn rewards' },
];


export function QuickTools() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto px-4 my-8">
        {tools.map((tool, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center p-6">
              <tool.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }