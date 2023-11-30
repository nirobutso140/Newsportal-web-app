import Title from '../../components/Container/Title';
import './Article.css'
import Select from 'react-select';


const Artical = () => {

    const handleAddArticle = (e) =>{
         e.preventDefault()
         const form = e.target
         const title = form.title.value
         const publisher = form.publisher.value
         const description = form.description.value
         const image = form.img.value
         const option = Array.from(event.target.selectedOptions, (option) => option.value);

         const info = {title,publisher,description,image,option}
         console.log(info);
    }

    const options = [
        { value: 'Technology', label: 'Technology' },
        { value: 'Business', label: 'Business' },
        { value: 'Science', label: 'Science' },
        { value: 'Health', label: 'Health' },
        { value: 'Sports', label: 'Sports' },
      ];

    return (
        <>

            <div className="py-24 form">
                <Title>Add Article</Title>
                <form onSubmit={handleAddArticle}>
                    {/* form name and quantity row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Publisher Name</span>
                            </label>
                            <label className="input-group w-full">
                                <input type="text" name="publisher" placeholder="Publisher Name" className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Article Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Article Description" className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Articles Tag</span>
                            </label>
                            <label className="input-group w-full">
                               <Select name="option" options={options} isMulti/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Select image</span>
                            </label>
                            <label className="input-group">
                            <input type="file" id="img" name="img" accept="image/*"/>
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}

                    <input type="submit" value="Add Article" className="btn btn-block btn-secondary bg-fuchsia-600 w-full" />

                </form>
            </div>
        </>
    );
};

export default Artical;