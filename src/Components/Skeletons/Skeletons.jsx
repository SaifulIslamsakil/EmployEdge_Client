import { Skeleton } from 'keep-react';

const Skeletons = () => {
    return (
        <div>
            <Skeleton className="max-w-xl space-y-2.5">
                <Skeleton.Line className="h-4 w-full" />
                <Skeleton.Line className="h-4 w-full" />
                <Skeleton.Line className="h-4 w-3/5" />
                <Skeleton.Line className="h-4 w-4/5" />
                <Skeleton.Line className="h-10 w-2/5" />
            </Skeleton>
        </div>
    );
};

export default Skeletons;