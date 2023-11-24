import Title from '../../components/Container/Title';
import './Article.css'

const Artical = () => {
    return (
        <>
        
            <div className="py-24 form">
            <Title>Add Article</Title>
                <form>
                    {/* form name and quantity row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                               <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="service" placeholder="Service Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group w-full">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full"  readOnly />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered w-full" readOnly />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Service Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Area</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="area" placeholder="Service Area" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}

                    <input type="submit" value="Add Article" className="btn btn-block btn-secondary bg-fuchsia-600 w-full"/>

                </form>
            </div>
        </>
    );
};

export default Artical;