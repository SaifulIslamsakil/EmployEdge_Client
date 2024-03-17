import { Carousel, Rating } from "keep-react";
import { GoDotFill } from "react-icons/go";

const Reviw = () => {
    return (
        <div>
            <div className=" text-center space-y-7">
                <h6 className=" text-2xl flex items-center justify-center gap-1 md:gap-5 font-semibold "> <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span>__OUR SERVICES__ <span className=" shadow-lg shadow-blue-400"><GoDotFill /></span></h6>
                <div className=" space-y-3">
                    <h1 className=" text-4xl font-bold">Service We Provide</h1>
                    <p>Lorem ipsum dolor,  sit amet consectetur <br />  adipisicing elit. Sit ullam optio necessitatibus a aperiam, eos, dolores et quod,</p>
                </div>
            </div>
            <div className=" w-1/2 mx-auto">
                <Carousel indicatorsType="ring" indicators={true}>
                    <div>
                        <div className=" block">
                        <Rating size={30} className="space-x-1">
                            <Rating.Star filledType="fill" />
                            <Rating.Star filledType="fill" />
                            <Rating.Star filledType="fill" />
                            <Rating.Star filledType="fill" />
                            <Rating.Star filledType="fill" />
                        </Rating>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam eos qui cupiditate ullam hic illum ut, voluptatem quidem fuga pariatur. Molestiae ex est porro voluptatem eligendi doloremque! Adipisci, deserunt.</p>
                        <h3>saiful islam</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Reviw;