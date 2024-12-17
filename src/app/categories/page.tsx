'use client'
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  
  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%] flex-col sm:flex-col ">

        <div className="p-10 font-semibold flex flex-col gap-4">
          <h1 className=" text-sm text-gray-400">TYPE</h1>
        <ul className="flex flex-col gap-4 text-gray-500 text-lg "> 
          
            <label htmlFor="Sport">
              <input type="checkbox"/> Sport (10)
            </label>
          
            <label htmlFor="SUV">
              <input type="checkbox"/> SUV (12)
            </label>

            <label htmlFor="MPV">
              <input type="checkbox"/> MPV (16)
            </label>

            <label htmlFor="Sedan">
              <input type="checkbox"/> Sedan (20)
            </label>

            <label htmlFor="Coupe">
              <input type="checkbox"/> Coupe (14)
            </label>

            <label htmlFor="Hatchback">
              <input type="checkbox"/> Hatchback (14)
            </label>
            
            </ul>
        </div>

        <div className="p-10 font-semibold flex flex-col gap-4">
          <h1 className=" text-sm text-gray-400">CAPACITY</h1>
        <ul className="flex flex-col gap-4 text-gray-500 text-lg "> 
          
            <label htmlFor="2 Person">
              <input type="checkbox"/> 2 Person (10)
            </label>
          
            <label htmlFor="4 Person">
              <input type="checkbox"/> 4 Person (14)
            </label>

            <label htmlFor="6 Person">
              <input type="checkbox"/> 6 Person(12)
            </label>

            <label htmlFor="8 or More">
              <input type="checkbox"/> 8 or More (16)
            </label>

            </ul>
        </div>

        <div className="p-10 font-semibold flex flex-col gap-4">
          <h1 className=" text-sm text-gray-400">PRICE</h1>
          <Image src={'/P R I C E  R A N G E.png'} alt='' width={350} height={10}/>
          <h1 className="text-xl text-gray-500"> Max. $100.00</h1>
        </div>

      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src={"/Switch.png"} alt="" width={60} height={60} className="w-[80px]" />
          <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className=' w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">

        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/car.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification1.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $99.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/car1.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification2.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $80.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <Link href={'/details'}>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button></Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Rolls-Royce <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sedan</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/car2.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification3.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $96.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

           
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Rush <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/AllNewRush.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification4.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $72.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

           
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                CR - V <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/suv (4).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification5.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $80.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                All New Terios <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/AllNewTerios.png"} alt="" width={220} height={68} />
              <Image src={"/Spesification6.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $74.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Exclusive <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/MG ZX Exclusice.png"} alt="" width={300} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $76.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NEW MG ZS <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>SUV</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/NewMG-ZS.png"} alt="" width={300} height={68} />
              <Image src={"/Spesification5.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $80.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>

           
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                MG ZX Excite <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Hatchback</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-14">
              <Image src={"/MG ZX Exclusice.png"} alt="" width={300} height={68} />
              <Image src={"/Spesification7.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p className="font-bold">
                $74.00/<span className="text-gray-400 font-medium text-sm">day</span>
              </p>
              <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">Rent Now</button>
            </CardFooter>
          </Card>


          </div>
         
        </section>

        <section className="button w-full text-center">
          <button 
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {"Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}