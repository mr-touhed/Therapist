
import img from "../../public/images/features/1.png"
const FeatureCard = () => {
    return (
        <section className="border border-gray rounded-md p-2 max-w-[490px] md:max-h-[160px] flex gap-2">
                                    <div className="w-[130px] h-[140px] rounded-md overflow-hidden ">
                                            <img src={img} alt="" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <p>

                                            <span className="font-normal text-sm text-[#5C635A] tracking-wider">123 Elm Street, New York</span>
                                        </p>
                                        <h3 className="text-sm font-medium text-heading tracking-wider">Healing Bodywork <span className="text-primary italic font-semibold">by Cort</span></h3>
                                        <p className="font-normal text-sm tracking-wide text-[#5C635A]">Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of... <span className="text-primary underline text-nowrap">Read More</span></p>
                                    </div>
                            </section>
    );
};

export default FeatureCard;