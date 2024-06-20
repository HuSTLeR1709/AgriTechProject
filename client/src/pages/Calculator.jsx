import React, { useState } from 'react';
import { cropData } from '../components/cropData/cropData'; 
import Footer from '../components/common/Footer';
import HighlightText from '../components/common/HighlightText';
import leafimg from '../assests/bgImages/heading.png';
const Calculator = () => {
  const [selectedCrop, setSelectedCrop] = useState('Wheat');
  const [nitrogen, setNitrogen] = useState(100);
  const [phosphorus, setPhosphorus] = useState(40);
  const [potassium, setPotassium] = useState(30);
  const [area, setArea] = useState(1);
  const [calculatedNPK, setCalculatedNPK] = useState(null);
  const [fertilizerRequirements, setFertilizerRequirements] = useState(null);
  const [fertilizerRequirementswithssp, setFertilizerRequirementswithssp] = useState(null);
  const [fertilizerRequirementswithnpk, setFertilizerRequirementswithnpk] = useState(null);

  const handleCropChange = (e) => {
    const selectedCrop = e.target.value;
    setSelectedCrop(selectedCrop);
    const crop = cropData.find(crop => crop.crop === selectedCrop);
    setNitrogen(crop.nitrogen_ratio);
    setPhosphorus(crop.phosphorus_ratio);
    setPotassium(crop.potassium_ratio);
  };

  const handleNitrogenChange = (e) => {
    setNitrogen(e.target.value);
  };

  const handlePhosphorusChange = (e) => {
    setPhosphorus(e.target.value);
  };

  const handlePotassiumChange = (e) => {
    setPotassium(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const calculateNPK = () => {
    const requiredNitrogen = (nitrogen) * area;
    const requiredPhosphorus = (phosphorus) * area;
    const requiredPotassium = (potassium) * area;
    setCalculatedNPK({ nitrogen: requiredNitrogen.toFixed(2), phosphorus: requiredPhosphorus.toFixed(2), potassium: requiredPotassium.toFixed(2) });

    // Calculate fertilizer requirements
    const { ureaRequired, dapRequired, mopRequired } = calculateFertilizerRequirements(requiredNitrogen, requiredPhosphorus, requiredPotassium);
    const { ureaRequiredwithssp, sspRequired, mopRequiredwithssp } = calculateFertilizerRequirementswithSSP(requiredNitrogen, requiredPhosphorus, requiredPotassium);
    const npkFertilizerOptions = calculateFertilizerRequirementswithNPK(requiredNitrogen, requiredPhosphorus, requiredPotassium);
    setFertilizerRequirements({ ureaRequired, dapRequired, mopRequired });
    setFertilizerRequirementswithssp({ ureaRequiredwithssp, sspRequired, mopRequiredwithssp });
    setFertilizerRequirementswithnpk(npkFertilizerOptions);
  };

  function calculateFertilizerRequirements(N, P, K) {
    // Assume the following nutrient content in fertilizers:
    const ureaContent = 0.46; // Urea contains 46% nitrogen
    const dapContent = { N: 0.18, P: 0.46 }; // DAP contains 18% nitrogen and 46% phosphorus
    const mopContent = { K: 0.6 }; // MOP contains 60% potassium

    // Calculate fertilizer requirements
    const mopRequired = +(K / mopContent.K).toFixed(2); 
    const dapRequired = +(P / dapContent.P).toFixed(2) 
    const nfulfilledbyDAP=dapRequired*0.18;
    const finalNReq=N-nfulfilledbyDAP;
  const ureaRequired = +(finalNReq / ureaContent).toFixed(2);

    return { ureaRequired, dapRequired, mopRequired };
  }
  function calculateFertilizerRequirementswithSSP(N, P, K) {
    // Assume the following nutrient content in fertilizers:
    const ureaContent = 0.46; // Urea contains 46% nitrogen
    const sspContent = 0.16; // SSP contains 16% phosphorus
    const mopContent = 0.6; // MOP contains 60% potassium

  
    const mopRequiredwithssp = +(K / mopContent).toFixed(2); 
    const sspRequired = +(P / sspContent).toFixed(2) 
  const ureaRequiredwithssp = +(N/ureaContent).toFixed(2);

    return { ureaRequiredwithssp, sspRequired, mopRequiredwithssp };
  }
  ;


  function calculateFertilizerRequirementswithNPK(N, P, K) {
    // Assume the following nutrient content in fertilizers:
    const ureaContent = 0.46; // Urea contains 46% nitrogen
    const sspContent = 0.16; // SSP contains 16% phosphorus
    const mopContent = 0.6; // MOP contains 60% potassium
    const NPKfertilizer = { N: 0.12, P: 0.32, K: 0.16 };

    let completedN = 0;
    let completedP = 0;
    let completedK = 0;
    let remainingN = N;
    let remainingP = P;
    let remainingK = K;
    let urearequired = 0;
    let ssprequired = 0;
    let moprequired = 0;
    let npkrequired=0;

    npkrequired= +(N / NPKfertilizer.N).toFixed(2);
    remainingN = 0;
    completedP = npkrequired * NPKfertilizer.P;
    completedK = npkrequired * NPKfertilizer.K;
    remainingP -= completedP;
    remainingK -= completedK;

    if (completedP > P) {
      remainingN = N;
    remainingP = P;
    remainingK = K;
       npkrequired = +(P / NPKfertilizer.P).toFixed(2);
        remainingP = 0;
        completedN = npkrequired * NPKfertilizer.N;
        completedK = npkrequired * NPKfertilizer.K;
        remainingN -= completedN;
        remainingK -= completedK;
    }

    if (completedK > K) {
      remainingN = N;
    remainingP = P;
    remainingK = K;
      npkrequired = +(K / NPKfertilizer.K).toFixed(2);
        remainingK = 0;
        completedN = npkrequired * NPKfertilizer.N;
        completedP = npkrequired * NPKfertilizer.P;
        remainingN -= completedN;
        remainingP -= completedP;
    }

    if (remainingN > 0) {
        urearequired = +(remainingN / ureaContent).toFixed(2);
    }
    if (remainingP > 0) {
        ssprequired = +(remainingP / sspContent).toFixed(2);
    }
    if (remainingK > 0) {
        moprequired = +(remainingK / mopContent).toFixed(2);
    }

    const fertilizerOptions = [
        { fertilizer: 'NPK', amount: npkrequired, composition: NPKfertilizer },
        { fertilizer: 'Urea', amount: urearequired },
        { fertilizer: 'SSP', amount: ssprequired },
        { fertilizer: 'MOP', amount: moprequired }
    ];

    // // Sort the options based on the amount required
    // fertilizerOptions.sort((a, b) => a.amount - b.amount);

    // // Filter out the options with zero amount
    // const nonZeroOptions = fertilizerOptions.filter(option => option.amount > 0);

    // // If there are more than 3 options with non-zero amount, consider only the top 3 options
    // const finalOptions = nonZeroOptions.slice(0, 3);

    return fertilizerOptions;
}


  return (
  <div className='w-full h-auto mt-20 bg-[#d9dcdf]'>
  <div className='w-11/12 h-auto mx-auto justify-center'>
  <div className='w-full py-7 flex items-center flex-col'>
  <h1 className='text-4xl'><HighlightText text={"Fertilizer Calculator"}/></h1>
  <img src={leafimg} alt='img' className='mt-4'></img>
  </div>
<div className='w-full py-7 flex items-center justify-between px-7'>
<div className=' text-xl font-semibold '>
  Select your Preffered crop
</div>
        <select value={selectedCrop} onChange={handleCropChange} className="border text-xl font-semibold border-gray-400 rounded-md px-3 py-1 mb-3">
          {cropData.map(crop => (
            <option key={crop.crop} value={crop.crop}>{crop.crop}</option>
          ))}
        </select>
 

</div>
      

      <div className="flex flex-row items-center justify-center gap-6 mt-5">
      <div className='flex flex-col items-center'>
      <label htmlFor="nitrogenInput" className="text-xl font-semibold mb-2">Nitrogen (N)</label>
        <input
          type="number"
          id="nitrogenInput"
          value={nitrogen}
          onChange={handleNitrogenChange}
          className="border border-gray-400 rounded-md px-3 py-1 mb-3"
        />

      </div>
      <div className='flex flex-col items-center'>
      <label htmlFor="phosphorusInput" className="text-xl font-semibold mb-2">Phosphorus (P)</label>
        <input
          type="number"
          id="phosphorusInput"
          value={phosphorus}
          onChange={handlePhosphorusChange}
          className="border border-gray-400 rounded-md px-3 py-1 mb-3"
        />
      </div>

       <div className='flex flex-col items-center'>
       <label htmlFor="potassiumInput" className="text-xl font-semibold mb-2">Potassium (K)</label>
        <input
          type="number"
          id="potassiumInput"
          value={potassium}
          onChange={handlePotassiumChange}
          className="border border-gray-400 rounded-md px-3 py-1 mb-3"
        />
       </div>
       </div>
       <div className='flex flex-col items-center'>
       <label htmlFor="areaInput" className="text-xl font-semibold mb-2">Area (acres):</label>
        <div className="flex flex-row items-baseline justify-center gap-2">
        <button onClick={() => setArea(prevArea => Math.max(0.5, prevArea - 0.5))} className="px-3 py-1 bg-gray-200 rounded-md">-</button>
          <input
            type="number"
            id="areaInput"
            value={area}
            onChange={handleAreaChange}
            step={0.5}
            className="border border-gray-400 rounded-md px-3 py-1 mb-3"
          />
          <button onClick={() => setArea(prevArea => prevArea + 0.5)} className="px-3 py-1 bg-gray-200 rounded-md">+</button>
        </div>
         {/* Calculate button */}
         <button onClick={calculateNPK} className="px-4 py-2 bg-blue-500 text-white rounded-md mt-5">Calculate</button>
       </div>


        {/* Display calculated NPK values */}
        <div className='flex w-full flex-col p-6 gap-6 items-center mx-0'>
        {calculatedNPK && (
          <div className="w-[450px] p-6 bg-white border gap-2 border-slate-400 border-solid flex flex-col items-center rounded-lg shadow-xl ">
            <h2 className="text-xl font-bold">Required NPK</h2>
            <div className=' w-full flex flex-row justify-between'>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>Nitrogen</p> <p> {calculatedNPK.nitrogen} kg</p></div>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>Phosphorus</p> <p> {calculatedNPK.phosphorus} kg</p></div>
            <div className='flex flex-col  w-[25%]'><p className='text-md font-semibold'>Potassium</p> <p> {calculatedNPK.potassium} kg</p></div>
            </div>
          </div>
        )}

        </div>
        {calculatedNPK && (
        <div className='text-lg font-semibold'>Choose Your Preferred Fertilizer Combination</div>
      )}
      <div className='flex w-full flex-row p-6 gap-6 items-center mx-0'>
        {/* Display calculated fertilizer requirements */}
        {fertilizerRequirements && (
          <div className="w-[450px] p-6 bg-white border gap-2 border-slate-400 border-solid flex flex-col items-start rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-center">Urea/DAP/MOP</h2>
            <div className=' w-full flex flex-row justify-between'>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>Urea(46:0:0)</p> <p> {fertilizerRequirements.ureaRequired} kg</p></div>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>DAP(18:46:0)</p> <p> {fertilizerRequirements.dapRequired} kg</p></div>
            <div className='flex flex-col  w-[25%]'><p className='text-md font-semibold'>MOP(0:0:60)</p> <p> {fertilizerRequirements.mopRequired} kg</p></div>
            </div>
          </div>
        )}
        {fertilizerRequirementswithssp && (
          <div className="w-[450px] p-6 bg-white border gap-2 border-slate-400 border-solid flex flex-col items-start rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-center"><div>Urea/SSP/MOP</div></h2>
            <div className=' w-full flex flex-row justify-between'>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>Urea(46:0:0)</p> <p> {fertilizerRequirementswithssp.ureaRequiredwithssp} kg</p></div>
            <div className='flex flex-col w-[25%]'><p className='text-md font-semibold'>SSP(0:16:0)</p> <p> {fertilizerRequirementswithssp.sspRequired} kg</p></div>
            <div className='flex flex-col  w-[25%]'><p className='text-md font-semibold'>MOP(0:0:60)</p> <p> {fertilizerRequirementswithssp.mopRequiredwithssp} kg</p></div>
            </div>
          </div>
        )}
        {fertilizerRequirementswithnpk && (
  <div className="w-[450px] p-6 bg-white border gap-2 border-slate-400 border-solid flex flex-col items-start rounded-lg shadow-xl">
    <h2 className="text-xl font-semibold text-center">NPK/MOP/Urea</h2>
    <div className=' w-full flex flex-row justify-between'>
    {fertilizerRequirementswithnpk.filter(option => option.amount > 0).map((option, index) => (
      
      
            <div key={index} className='flex flex-col w-[25%]'><p className='text-md font-semibold'>{option.fertilizer}</p> <p> {option.amount} kg</p></div>
            
    ))}</div>
    
  </div>
)}
      </div>
        

    </div>
    <Footer/>
  </div>
  );
}

export default Calculator;
