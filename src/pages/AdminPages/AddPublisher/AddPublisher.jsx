import React from 'react';
import Title from '../../../components/Container/Title';

const AddPublisher = () => {
    return (
        <>
            <div className="publisherForm mt-8">
                <Title>Add Publisher</Title><br />
                <form>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-green-600">Publisher Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="service" placeholder="Publisher Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-green-600">Publisher Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="service" placeholder="Publisher Photo" className="input input-bordered w-full" />
                        </label>
                    </div> <br />
                    <input type="submit" value="Add Article" className="btn btn-block btn-secondary bg-fuchsia-600 w-full border border-0" />   
                </form>  
            </div>
        </>
    );
};

export default AddPublisher;