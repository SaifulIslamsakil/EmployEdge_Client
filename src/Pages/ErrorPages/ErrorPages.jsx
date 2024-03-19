import { Button, Empty } from "keep-react";
import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <div>
            <Empty>
                <Empty.Image>
                    <img
                        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
                        height={234}
                        width={350}
                        alt="404"
                    />
                </Empty.Image>
                <Empty.Title>Oops! You seem to be lost</Empty.Title>
                <Empty.Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </Empty.Description>
               <Link to={"/"}> <Button value="outline" >Go to home</Button></Link>
            </Empty>
        </div>
    );
};

export default ErrorPages;