import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {useState,useEffect	} from 'react';
import {RxCross2} from 'react-icons/rx';
import {BsWhatsapp} from 'react-icons/bs'

export default function Main() {
	// body...

	const [cartArray,setCartArray]  = useState([]);
	const [openOverlay,setOpenOverlay] = useState(false);
	const [confirm,setConfirm] = useState(false);
	const [url,setUrl] = useState('');


	const urlSetter = () => {
		console.log(cartArray)
		let arr = cartArray.map((car)=>{
			return car?.name + ' - x' + car?.quantity
		})
		let str = `https://wa.me/+91${process.env.NEXT_PUBLIC_NUMBER}?text=New Order\n\n${arr.join('\n')}`;
		setUrl(encodeURI(str));
		console.log(encodeURI(str));

	}

	const addToList = (name) => {
		let arr = [...cartArray];
		let dat = {
			name:name,
			quantity:1
		}
		const check = arr.some(element=>{
			if(element.name === name){
				return true;
			}
			return false
		})

		if(!check){
			arr.push(dat);
			setCartArray(arr)	
		}		
	}


	const removeFromList = (name) => {
		let arr = [...cartArray]
		const idx = arr.findIndex(element=>{
			if(element.name === name){
				return true
			}
			return false
		})
		arr.splice(idx,1);
		setCartArray(arr)

	}

	const addQuantity = (name) => {
		let arr = [...cartArray]
		const idx = arr.findIndex(element=>{
			if(element.name === name){
				return true
			}
			return false
		})
		arr[idx].quantity = arr[idx].quantity + 1
		document.getElementById(`quantity-${name}`).innerText = arr[idx].quantity;
		setCartArray(arr)
	}

	const minusQuantity = (name) => {
		let arr = [...cartArray]
		const idx = arr.findIndex(element=>{
			if(element.name === name){
				return true
			}
			return false
		})
		if(arr[idx].quantity > 1){
			arr[idx].quantity = arr[idx].quantity - 1;
			document.getElementById(`quantity-${name}`).innerText = arr[idx].quantity;
			setCartArray(arr)
		}
	}

	// useEffect(()=>{
	// 	console.log(cartArray)
	// },[cartArray])


	return (
		<div className="mx-auto flex flex-col py-5 gap-3 md:px-10 px-3 h-full max-w-3xl">	
			<div className='w-full rounded-xl'>
				<img src="https://ik.imagekit.io/d3kzbpbila/thejashari_9dS0MoRSv?updatedAt=1689019280639"
				alt=""
				className="w-full rounded-xl"
				onClick={()=>console.log(cartArray)}
				/>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full h-[10px] absolute rounded-t-xl top-0 bg-[#7a6357]/80"/>
				<h1 className="md:px-10 px-5 py-6 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center text-black">
					Order form
				</h1>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Coco Soap</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Coco soap scented</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox').checked){
								    		addToList('Coco soap scented')
								    		document.getElementById('valuebox').classList.remove('w-0')
								    		document.getElementById('valuebox').classList.add('w-20')
								    	}else{
								    		removeFromList('Coco soap scented')
								    		document.getElementById('valuebox').classList.remove('w-20')
								    		document.getElementById('valuebox').classList.add('w-0')
								    		document.getElementById('quantity-Coco soap scented').innerText = '1'
								    	}
								    }} id="checkbox" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Coco soap scented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Coco soap scented" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Coco soap scented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Coco soap unscented</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox2"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox2').checked){
								    		addToList('Coco soap unscented')
								    		document.getElementById('valuebox2').classList.remove('w-0')
								    		document.getElementById('valuebox2').classList.add('w-20')
								    	}else{
								    		removeFromList('Coco soap unscented')
								    		document.getElementById('valuebox2').classList.remove('w-20')
								    		document.getElementById('valuebox2').classList.add('w-0')
								    		document.getElementById('quantity-Coco soap unscented').innerText = '1'
								    	}
								    }} id="checkbox2" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox2" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Coco soap unscented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Coco soap unscented" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Coco soap unscented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Kadala Mauv Soap</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Kadala Mauv soap scented</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox3').checked){
								    		addToList('Kadala Mauv soap scented')
								    		document.getElementById('valuebox3').classList.remove('w-0')
								    		document.getElementById('valuebox3').classList.add('w-20')
								    	}else{
								    		removeFromList('Kadala Mauv soap scented')
								    		document.getElementById('valuebox3').classList.remove('w-20')
								    		document.getElementById('valuebox3').classList.add('w-0')
								    		document.getElementById('quantity-Kadala Mauv soap scented').innerText = '1'
								    	}
								    }} id="checkbox3" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox3" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Kadala Mauv soap scented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Kadala Mauv soap scented" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Kadala Mauv soap scented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Kadala Mauv soap unscented</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox4"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox4').checked){
								    		addToList('Kadala Mauv soap unscented')
								    		document.getElementById('valuebox4').classList.remove('w-0')
								    		document.getElementById('valuebox4').classList.add('w-20')
								    	}else{
								    		removeFromList('Kadala Mauv soap unscented')
								    		document.getElementById('valuebox4').classList.remove('w-20')
								    		document.getElementById('valuebox4').classList.add('w-0')
								    		document.getElementById('quantity-Kadala Mauv soap unscented').innerText = '1'
								    	}
								    }} id="checkbox4" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox4" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Kadala Mauv soap unscented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Kadala Mauv soap unscented" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Kadala Mauv soap unscented')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Shampoo</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Hair Pro Shampoo 250g</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox5').checked){
								    		addToList('Hair Pro Shampoo 250g')
								    		document.getElementById('valuebox5').classList.remove('w-0')
								    		document.getElementById('valuebox5').classList.add('w-20')
								    	}else{
								    		removeFromList('Hair Pro Shampoo 250g')
								    		document.getElementById('valuebox5').classList.remove('w-20')
								    		document.getElementById('valuebox5').classList.add('w-0')
								    		document.getElementById('quantity-Hair Pro Shampoo 250g').innerText = '1'
								    	}
								    }} id="checkbox5" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox5" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Hair Pro Shampoo 250g')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Hair Pro Shampoo 250g" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Hair Pro Shampoo 250g')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Liquid detergent</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Active Wash Liquid Deterent 1 litre</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox6').checked){
								    		addToList('Active Wash Liquid Deterent 1 litre')
								    		document.getElementById('valuebox6').classList.remove('w-0')
								    		document.getElementById('valuebox6').classList.add('w-20')
								    	}else{
								    		removeFromList('Active Wash Liquid Deterent 1 litre')
								    		document.getElementById('valuebox6').classList.remove('w-20')
								    		document.getElementById('valuebox6').classList.add('w-0')
								    		document.getElementById('quantity-Active Wash Liquid Deterent 1 litre').innerText = '1'
								    	}
								    }} id="checkbox6" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox6" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Active Wash Liquid Deterent 1 litre')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Active Wash Liquid Deterent 1 litre" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Active Wash Liquid Deterent 1 litre')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">High Quality Liquid Detergent 5L with can</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox10').checked){
								    		addToList('High Quality Liquid Detergent 5L with can')
								    		document.getElementById('valuebox10').classList.remove('w-0')
								    		document.getElementById('valuebox10').classList.add('w-20')
								    	}else{
								    		removeFromList('High Quality Liquid Detergent 5L with can')
								    		document.getElementById('valuebox10').classList.remove('w-20')
								    		document.getElementById('valuebox10').classList.add('w-0')
								    		document.getElementById('quantity-High Quality Liquid Detergent 5L with can').innerText = '1'
								    	}
								    }} id="checkbox10" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox10" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('High Quality Liquid Detergent 5L with can')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-High Quality Liquid Detergent 5L with can" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('High Quality Liquid Detergent 5L with can')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Handwash Liquid</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Clean Hand Handwash Liquid 500g</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox7').checked){
								    		addToList('Clean Hand Handwash Liquid 500g')
								    		document.getElementById('valuebox7').classList.remove('w-0')
								    		document.getElementById('valuebox7').classList.add('w-20')
								    	}else{
								    		removeFromList('Clean Hand Handwash Liquid 500g')
								    		document.getElementById('valuebox7').classList.remove('w-20')
								    		document.getElementById('valuebox7').classList.add('w-0')
								    		document.getElementById('quantity-Clean Hand Handwash Liquid 500g').innerText = '1'
								    	}
								    }} id="checkbox7" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox7" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Clean Hand Handwash Liquid 500g')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Clean Hand Handwash Liquid 500g" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Clean Hand Handwash Liquid 500g')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Dishwash</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Dish Wash Soap</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox8').checked){
								    		addToList('Dish Wash Soap')
								    		document.getElementById('valuebox8').classList.remove('w-0')
								    		document.getElementById('valuebox8').classList.add('w-20')
								    	}else{
								    		removeFromList('Dish Wash Soap')
								    		document.getElementById('valuebox8').classList.remove('w-20')
								    		document.getElementById('valuebox8').classList.add('w-0')
								    		document.getElementById('quantity-Dish Wash Soap').innerText = '1'
								    	}
								    }} id="checkbox8" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox8" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Dish Wash Soap')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Dish Wash Soap" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Dish Wash Soap')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>
			<div className='w-full relative rounded-xl border-[1px] bg-white border-gray-500/30'>
				<div className="w-full flex items-center">
					<div className="lg:px-10 md:px-5 px-3 flex flex-col w-full py-6">
						<h1 className="lg:text-3xl text-2xl text-black">Handwash</h1>
						<div className="mt-4 flex flex-wrap items-center bg-sky-200/10 py-[7px] transition-all duration-200 ease-in-out px-2 w-full justify-between 
						items-center border-[1px] border-gray-400/30 rounded-xl">
							<h1 className="md:text-xl text-lg sm:mb-0 mb-0  flex flex-wrap text-black">Hand Wash Soap (a set of 3)</h1>
							<div className="flex gap-2 items-center">
								<label class="checkbox-btn">
								    <label for="checkbox"></label>
								    <input onChange={(e)=>{
								    	if(document.getElementById('checkbox9').checked){
								    		addToList('Hand Wash Soap (a set of 3)')
								    		document.getElementById('valuebox9').classList.remove('w-0')
								    		document.getElementById('valuebox9').classList.add('w-20')
								    	}else{
								    		removeFromList('Hand Wash Soap (a set of 3)')
								    		document.getElementById('valuebox9').classList.remove('w-20')
								    		document.getElementById('valuebox9').classList.add('w-0')
								    		document.getElementById('quantity-Hand Wash Soap (a set of 3)').innerText = '1'
								    	}
								    }} id="checkbox9" type="checkbox"/>
								    <span className="checkmark"></span>
								</label>
								<div id="valuebox9" className={`flex items-center transition-all overflow-hidden duration-200 ease-in-out w-0`}>
									<div className="bg-white max-w-[100%] border-gray-500/40 border-[1px] rounded-2xl gap-2 flex items-center">
										<div 
										onClick={()=>addQuantity('Hand Wash Soap (a set of 3)')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlinePlus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
										<p id="quantity-Hand Wash Soap (a set of 3)" className="text-md text-black select-none">1</p>
										<div 
										onClick={()=>minusQuantity('Hand Wash Soap (a set of 3)')}
										className="p-[2px] rounded-full hover:bg-gray-200/40 transition-all duration-200 ease-in-out">
											<AiOutlineMinus className="select-none h-5 w-5 cursor-pointer text-sky-500"/>
										</div>
									</div>

								</div>
							</div>
						</div>
						

					</div>
				</div>
			</div>
			


			<div className={`mt-5 w-full flex justify-between px-5 pb-[70px] items-center`}>
				<button	
				onClick	={()=>{
					location.reload()
				}}
				className="text-red-500 text-lg font-semibold	">
					Reset
				</button>
				<button 
				onClick={()=>{
					if(cartArray.length > 0){setOpenOverlay(true)}
				}}
				className={`rounded-xl ${cartArray.length < 1 ?  'bg-[#008b97]/50 cursor-not-allowed' : 'bg-[#008b97] cursor-pointer'}  px-7 py-2 text-white text-lg `}>
					Order
				</button>

			</div>


			<div className={`fixed w-full top-0 h-full bg-black/40 flex justify-center items-center 
			${openOverlay ? 'left-0' : 'left-[100%]'} transition-all duration-300 ease-in-out`}>
				<div className="lg:w-[40%] md:w-[60%] sm:w-[75%] w-[90%] border-gray-500/60 flex flex-col bg-white rounded-xl md:h-[90%] h-[93%] overflow-hidden border-[1px]">
					<div className='w-full h-auto relative rounded-t-xl bg-white border-gray-500/30'>
						<div className="w-full h-[10px] absolute rounded-t-xl top-0 bg-[#7a6357]/90"/>
						<h1 className="md:px-5 px-4 md:py-6 pt-6  py-4 lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl text-lg 
						font-semibold  text-black flex items-center justify-between">
							Items Ordered	
							<div 
							onClick={()=>setOpenOverlay(false)}
							className="p-1 ml-5 rounded-full hover:bg-gray-200/60">
								<RxCross2 className="h-8 w-8"/>
							</div>
						</h1>
						<div className="w-full border-[1px] bg-gray-500 "/>
					</div>
					<div className={`flex px-2 h-[86%] py-3 flex-col gap-2 w-full h-full overflow-y-scroll 
					scrollbar-thin ${confirm && ''} transition-all duration-300 ease-in-out scrollbar-track-gray-300 scrollbar-thumb-sky-500`}>
					{
						cartArray?.map((cart,j)=>(
						<div key={j} className="flex flex-col">
							<div className="flex hover:bg-gray-200/50 ease-in-out transition-all duration-200
							cursor-pointer items-center justify-between gap-7 px-2 py-3 rounded-xl">
								<h1 className="text-lg text-black font-semibold">{cart?.name}</h1>
								<p className="text-lg text-gray-500 font-semibold whitespace-nowrap">x {cart?.quantity}</p>

							</div>
							<div className="w-full mt-2 bg-gray-300/50 h-[1px] "/>
						</div>
						))	

					}
					<div className='mt-3 w-full flex items-center justify-center'>
						<button 
						onClick={()=>{setConfirm(true);setOpenOverlay(false);urlSetter()}}
						className="bg-green-700/90 hover:bg-green-600 text-white px-5 py-2 rounded-xl">
							Confirm
						</button>
					</div>


					</div>

				</div>

			</div>
			<div className={`fixed w-full top-0 h-full bg-black/40 flex justify-center items-center 
			${confirm ? 'right-0' : 'right-[100%]'} transition-all duration-300 ease-in-out`}>
				<div className="lg:w-[40%] md:w-[60%] sm:w-[75%] w-[90%] border-gray-500/60 flex flex-col bg-white rounded-xl md:h-[90%] h-[93%] overflow-hidden border-[1px]">
					<div className='w-full h-auto relative rounded-t-xl bg-white border-gray-500/30'>
						<div className="w-full h-[10px] absolute rounded-t-xl top-0 bg-[#7a6357]/90"/>
						<h1 className="md:px-5 px-4 md:py-6 pt-6  py-4 lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl text-lg 
						font-semibold  text-black flex items-center justify-between">
							Submit your order on
						</h1>
						<div className="w-full border-[1px] bg-gray-500 "/>
						<div className={`flex px-2 h-[86%] py-3 flex-col gap-2 w-full h-full items-center
						scrollbar-thin transition-all duration-300 ease-in-out scrollbar-track-gray-300 scrollbar-thumb-sky-500`}>
							<a href={url}><button className="flex items-center md:gap-4 xs:gap-3 gap-2 font-semibold md:text-2xl 
							text-xl bg-[#25d366] px-5 py-4 rounded-xl text-white hover:scale-105 transition-all duration-100
							ease-in active:scale-95 shadow-xl mt-2">
								<BsWhatsapp className="md:h-8 h-7 w-7 md:w-8 "/> Order in Whatsapp
							</button></a>

							<div class="pyramid-loader">
							  <div class="wrapper">
							    <span class="side side1"></span>
							    <span class="side side2"></span>
							    <span class="side side3"></span>
							    <span class="side side4"></span>
							    <span class="shadow"></span>
							  </div>  
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}