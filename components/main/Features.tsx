import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Shield, Users, Zap } from 'lucide-react';

export function Features() {
  return (
    <div className="container mx-auto px-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader >
            <Shield className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Passive Income Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
            Earn rewards effortlessly through innovative financial strategies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>NFT Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
            Access exclusive digital assets with real-world value and utility.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Utility-Driven Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
            Leverage tools and features designed to enhance your crypto experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}