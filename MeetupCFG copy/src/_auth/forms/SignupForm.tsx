import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const schema = z.object ({
    fullname: z.string(),
    username: z.string(),
    password: z.string().min(8),
    email: z.string().email(),
    postcode: z.string().min(5)
})

type FormFields = z.infer<typeof schema>;

const SignupForm = () => {
    const { register, handleSubmit, setError, formState:{ errors, isSubmitting }, } 
    = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
            console.log(data);

        } catch (error) {
            setError("root", {
                message: "This username is already taken"
            });
        }
    };

    return (
        <form className="gap-2" onSubmit ={handleSubmit(onSubmit)}>

            <div className="sm:w-420 flex-center flex-col">

            <img src="" alt="" />

            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> The Neighbour Hub </h2>
            <p className="small-medium md:base-regular mt-2"> Join the community, sign up below to get started</p>

            </div>

            <input {...register("fullname", {
                required: "Full name is required"}
            )} type="text" placeholder="Full Name" />

            <input {...register("username", {
                required: "Username is required"
            })} type="text" placeholder="Username" />

            <input {...register("password")}  type="password" placeholder="Password" />

            {errors.password && (<div>{errors.password.message}</div>)}

            <input {...register( "email" )} type="text" placeholder="Email"/>

            <input {...register("postcode")}type="text" placeholder="Postcode"/>

            <button  disabled={isSubmitting} type="submit"> {isSubmitting ? "Loading" : "Submit"} </button>

            {errors.root && (<div>{errors.root.message}</div>)}
        </form>
    );
};

export default SignupForm