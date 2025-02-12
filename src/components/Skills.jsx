const Skills = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Hire Me?</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Visual Design</h3>
            <p>Create stunning UI/UX designs</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Design Prototype</h3>
            <p>Advanced designs with Figma</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold">UX Research</h3>
            <p>Enhance user experience</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  