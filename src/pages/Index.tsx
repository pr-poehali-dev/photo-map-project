// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8 opacity-0 animate-[fade-in_0.6s_ease-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-4">
            Привет, карточка подошла
          </h1>
        </div>
        
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-2xl opacity-0 animate-[scale-in_0.5s_ease-out_0.3s_forwards]">
          <img 
            src="https://v3b.fal.media/files/b/tiger/WPZXmXcxzbRorjoTrA04__output.png" 
            alt="Карта" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;