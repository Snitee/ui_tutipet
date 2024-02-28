import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image src='/info.svg'
          alt={"Hình con mèo"}
          height={250}
          width={500}
          className='w-full object-cover cursor-pointer'/>
        <div className={'mb-8 mx-36 mt-[-2rem] p-3 bg-[#FFC195] rounded-b-xl relative shadow-lg shadow-slate-300 border'}>
            <h1 className='text-center'>CHÀO MỪNG BẠN ĐẾN VỚI CHÚNG TÔI</h1>
        </div>
        <div className={"flex flex-row m-2 p-10"}>
            <Image src='/logo.svg'
              alt={"Hình Giới Thiệu"} 
              className=" ml-4 w-1/3" 
              height={250}
              width={500}/>
            <div className="m-4 p-5 px-28 w-2/3 mr-4">
                <h2 className="text-center p-2 uppercase ">Xin chào! <br/>Chúng tôi là TuTiPet</h2>
                <p className="text-xl p-2 text-center italic">
                    Nơi cung cấp những dịch vụ chăm sóc thú cưng và là nơi kết nối những người yêu thích pet
                    Hãy đến và trải nghiệm những dịch vụ đặc biệt cùng với những sản phẩm uy tín, chất lượng.
                    Chúng tôi sẽ không làm bạn phải thất vọng!
                </p>
            </div>
        </div>
        <div className="flex flex-row m-2 p-10">
            <div className="m-4 p-5 px-28 w-2/3">
                <h2 className="text-left p-2 pl-16 uppercase">Sự nhiệt huyết</h2>
                <p className="text-xl p-2 pl-24 text-start italic">
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Với đội ngũ chăm sóc thú cưng tại cửa hàng của chúng tôi đầy
                    nhiệt huyết và đam mê. Với sứ mệnh tận tâm, họ không chỉ là những người chăm sóc mà còn là
                    những người bạn đồng hành cho từng bé cưng. Tận tụy trong việc tạo môi trường thân thiện
                    và an toàn, họ luôn sẵn sàng chia sẻ kiến thức và kinh nghiệm 
                    để giúp khách hàng hiểu rõ hơn về việc chăm sóc và nuôi dưỡng thú cưng của mình. 
                    Sự ân cần, chu đáo và sự yêu thương chân thành là điều mà đội ngũ chăm sóc thú cưng của chúng tôi 
                    luôn muốn truyền tải đến từng người yêu thú cưng.
                </p>
            </div>
            <Image 
              src='/logo.svg' 
              alt={"Hình Giới Thiệu"} 
              className="m-4 w-1/3" 
              height={250}
              width={500}
              />
        </div>
        <div className="w-full px-8 mb-4">
            <div className="bg-beige-300  flex p-3 rounded-b-lg shadow-lg shadow-slate-300 border 
        items-center justify-between">
            <h1 className="ml-2 uppercase">Sản Phẩm</h1>
            <Link 
              href={"#"} 
              className="mr-8"
              >
                <span 
                  className="text-lg capitalize text-green-700 
                  font-bold hover:text-green-300"
                  >
                    xem thêm
                  </span>
              </Link>
            </div>
        </div>
    </div>
    </>
  );
}
