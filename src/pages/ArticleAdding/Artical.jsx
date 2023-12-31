
import Title from '../../components/Title';
import './Article.css'
import Select from 'react-select';
import useAxiosPublic from '../../hooks/useAxiosPublic'



const Artical = () => {
    const axiosPublic = useAxiosPublic()
    // const [publisher, setPublisher] = useState([])
    // useEffect(()=>{
    //    axiosPublic.get('/publisher')
    //    .then(res => setPublisher(res.data))
    //    console.log(publisher);
    // }, [])

    const handleAddArticle = (e) =>{
         e.preventDefault()
         const form = e.target
         const title = form.title.value
         const publisher = form.publisher.value
         const description = form.description.value
         const image = form.img.value
         const option = form.option.value
         const author = form.author.value
         const email = form.email.value
         const date = form.date.value

         const info = {title,publisher,description,image,option,author,email,date}
         console.log(info);

         axiosPublic.post('/article', info)
         .then(res => {
            console.log(res);
               if (res.data.insertedId) {
                   e.target.reset()
                   swal("Great", "A Article Added Successfully", "success");
               }
           })


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
                                <span className="label-text text-green-600">Article Author Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="author" placeholder="Article Author Name" className="input input-bordered w-full"  />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Article Author Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Article Author Email" className="input input-bordered w-full"  />
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
                               <Select name="option" options={options}/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Posted Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="date" placeholder="Article Author Email" className="input input-bordered w-full"  />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Select image</span>
                            </label>
                            <label className="input-group">
                            {/* <input type="file" name="img" className="file-input file-input-bordered file-input-success w-full max-w-xs" /> */}
                            <input type="text" name="img" placeholder="Select image" className="input input-bordered w-full"  />
                            </label>
                        </div>
                         <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-green-600">Article Description</span>
                            </label>
                            <label className="input-group">
                                {/* <input type="text" name="description" placeholder="Article Description" className="input input-bordered w-full"  /> */}
                                <textarea name="description" id="" cols="65" rows="5" placeholder="Article Description" className='w-full'></textarea>
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