import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const promotedCoins = [
  { name: 'MetaVerse Coin', symbol: 'MVC', change: '+15.2%', promoted: true },
  { name: 'DeFi Token', symbol: 'DFT', change: '+8.7%', promoted: true },
  { name: 'GameFi Coin', symbol: 'GFC', change: '+12.4%', promoted: true },
];

export function PromotedCoins() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-2xl font-bold mb-6">Promoted Coins</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotedCoins.map((coin, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{coin.name}</CardTitle>
                <Badge variant="secondary" className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  Promoted
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">{coin.symbol}</span>
                <span className="text-green-500 font-medium">{coin.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}