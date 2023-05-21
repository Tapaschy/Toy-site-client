import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { UserToContext } from '../../provider/UserContext';
import useTitle from '../../hooks/useTItle';


const Addtoy = () => {
    useTitle('ADD A TOY')
    const{user}=useContext(UserToContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
    
        fetch("https://disney-toy-world-production.up.railway.app/toys", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
                Swal.fire('Toy added');
            }
            console.log(data);
          });
        console.log(data);
      };
    return (
        <div>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold text-primary text-center">Add a Toy</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='pt-7'>
                    <div className='md:flex mb-3'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("toyname")}
                                placeholder="toyname"
                                defaultValue="toyname"
                            />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                value={user.displayName}
                                {...register("seller")}
                                placeholder="seller"
                                defaultValue="Seller name"
                            />
                        </div>
                    </div>
                    <div className='md:flex mb-3'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                value={user.email}
                                {...register("email")}
                                placeholder="email"
                                defaultValue="email"
                            />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("photo")}
                                placeholder="photo"
                                defaultValue="photo url"
                            />
                        </div>
                    </div>
                    <div className='md:flex mb-3'>
                        <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} className="select w-full">
                                <option value="mickeymouse">Mickey Mouse</option>
                                <option value="goofy">Goofy</option>
                                <option value="donaldduck">Donald Ducks</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("price")}
                                placeholder="price"
                                defaultValue="price"
                            />
                        </div>
                    </div>
                    <div className='md:flex mb-3'>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("rating")}
                                placeholder="rating"
                                defaultValue="rating"
                            />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("quantity")}
                                placeholder="quantity"
                                defaultValue="quantity"
                            />
                        </div>
                    </div>
                    <div className='md:flex mb-3'>
                        <div className="form-control md:w-full ml-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                className="text-input input input-bordered w-full"
                                {...register("description")}
                                placeholder="description"
                                defaultValue="description"
                            />
                        </div>
                    </div>
                    <p className='text-center'><input type="submit" className='text-center btn btn-primary'/></p>
                    
                </form>
            </div>
        </div>
    );
};

export default Addtoy;