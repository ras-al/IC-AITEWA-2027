export const StatCallout = ({ stat, description }: { stat: string; description: string }) => {
  return (
    <div className="border-l-4 border-primary pl-6 py-2 my-8">
      <p className="font-serif text-4xl font-bold text-primary mb-2">{stat}</p>
      <p className="font-sans text-lg leading-snug">{description}</p>
    </div>
  );
};
