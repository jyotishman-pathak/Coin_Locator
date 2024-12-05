export function Advertisement() {
    return (
      <div className="container mx-auto px-4 my-8">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Promote Your Coin Here</h2>
          <p className="text-muted-foreground mb-4">
            Reach thousands of potential investors and traders
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </div>
    );
  }