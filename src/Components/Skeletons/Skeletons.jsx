import { Skeleton } from 'keep-react';

const Skeletons = () => {
    return (
        <div className=' py-20'>
            <Skeleton className=" md:w-3/4 mx-auto space-y-2.5">
                <Skeleton.Line className="h-4 w-full" />
                <Skeleton.Line className="h-4 w-full" />
                <Skeleton.Line className="h-4 w-3/5" />
                <Skeleton.Line className="h-4 w-4/5" />
                <Skeleton.Line className="h-10 w-2/5" />
                <Skeleton.Line className="h-10 w-2/5" />
                <Skeleton.Line className="h-10 w-2/5" />
                <Skeleton className="flex max-w-md items-center gap-3">
                    <Skeleton.Line className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton.Line className="h-4 w-[250px]" />
                        <Skeleton.Line className="h-4 w-[200px]" />
                    </div>
                </Skeleton>
            </Skeleton>

        </div>
    );
};

export default Skeletons;