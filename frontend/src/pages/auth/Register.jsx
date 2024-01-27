import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import { postData } from "../../api";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/reducers";

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault();

        const data = {
            fullname,
            email,
            password,
        };

        const newUser = await postData(
            `http://localhost:3000/auth/register`,
            data
        );

        if (newUser?.errors) {
            setErrors(newUser.errors);
        } else {
            dispatch(
                setAlert({
                    status: true,
                    msg: "Congratulations! Your account has been created",
                })
            );

            setErrors([]);
            navigate("/login");
        }
    };

    return (
        <section
            id="register"
            className="min-h-screen flex justify-center items-center relative"
        >
            <div className="w-96 bg-slate-900/25 border border-slate-900/25 rounded-lg overflow-hidden mx-4 sm:mx-0">
                <h3 className="bg-lilac text-2xl text-white text-center py-3 border-b border-slate-900/50">
                    DAFTAR
                </h3>

                <form onSubmit={submitLogin} className="px-6 py-8">
                    <InputText
                        type="text"
                        field="fullname"
                        placeholder="Nama Lengkap"
                        icon="user"
                        value={fullname}
                        onValueChange={setFullname}
                        modifier="input-fullname"
                        errors={errors}
                    />

                    <InputText
                        type="email"
                        field="email"
                        placeholder="Alamat Email"
                        icon="envelope"
                        value={email}
                        onValueChange={setEmail}
                        modifier="input-email"
                        errors={errors}
                    />

                    <InputText
                        type="password"
                        field="password"
                        placeholder="Kata Sandi"
                        icon="show"
                        value={password}
                        onValueChange={setPassword}
                        modifier="input-password"
                        cursor="cursor-pointer"
                        errors={errors}
                    />

                    <div className="mb-4 text-center">
                        <button
                            type="submit"
                            className="bg-lilac hover:bg-lilac-hover duration-100 text-white p-2 px-6 rounded-full shadow"
                        >
                            Daftar
                        </button>
                    </div>
                    <div className="text-center text-white">
                        <p className="text-sm">
                            Sudah punya akun?{" "}
                            <Link
                                to="/login"
                                className="text-blue-500 hover:text-blue-700 duration-100"
                            >
                                Masuk
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
