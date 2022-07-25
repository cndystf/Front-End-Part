import React from "react";
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from "../../images/rectangle-purple.png"
import arrow from "../../images/fi_arrow-left.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function InfoProduk() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");

    const postProduct = () => {
        axios
            .post("https://second-hand-binar.herokuapp.com/api/product/create", {
                name:name,
                price:price,
                categoryId:categoryId,
                description:description,
                photo:photo
            })
            // .then(function (response) {
            //     console.log(response);
            //     cookies.set("jwt", response.data.data.token, {
            //         path: "/",
            //         expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            //     });
            // })
            .then(function(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    return (
        <div className="info-produk">
            <nav className="navbar navbar-expand-lg bg-light d-inline-flex" 
                style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div className="d-inline-flex" style={{ padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="navbar-brand" href="/home"><img src={rectangle} alt='' />
                    </a>
                </div>
                
                <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <span className="navbar-brand mb-0 h1" style={{ fontWeight: '400px' }}>Lengkapi Detail Produk</span>
                </div>
                
                <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <span className="navbar-brand mb-0 h1"></span>
                </div>
            </nav>

            <section>
                <form>
                    <div className="container" style={{ padding: '30px', width: '70%' }}>
                    <a href="/home"> <img src={arrow} alt="" /></a>
                        <div className="mb-3">
                            <label for="namaproduk" className="form-label">Nama Produk<span style={{ color: 'red' }}>*</span></label>
                            <input 
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                type="text" 
                                className="form-control" 
                                id="namaproduk" 
                                placeholder="Nama Produk" 
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="harga" className="form-label">Harga Produk<span style={{ color: 'red' }}>*</span></label>
                            <input 
                                value={price}
                                onChange={(event) =>
                                    setPrice(event.target.value)
                                }
                                type="number" 
                                min="1" 
                                step="any" 
                                className="form-control" 
                                id="harga" 
                                placeholder="Rp 0,00" 
                                required />
                        </div>
                        <div className="mb-3">
                            <label for="kategori" className="form-label">Kategori<span style={{ color: 'red' }}>*</span></label>
                            <select
                                value={categoryId}
                                onChange={(event) =>
                                    setCategoryId(event.target.value)
                                }
                                className="form-select"  
                                required>
                                <option selected>Pilih Kategori</option>
                                <option value="1"> Hobi</option>
                                <option value="2"> Kendaraan</option>
                                <option value="3"> Baju</option>
                                <option value="4"> Elektronik</option>
                                <option value="5"> Kesehatan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="deskripsi" className="form-label">Deskripsi<span style={{ color: 'red' }}>*</span></label>
                            <input 
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                                type="text"
                                className="form-control" 
                                id="deskripsi" 
                                placeholder="contoh: Jalan Ikan Hiu 33" 
                                required />
                        </div>

                        <div className="mb-3">
                            <label for="foto" className="form-label">Foto Produk<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <label><img src="fi_plus.png" alt='' style={{ borderStyle: 'dashed', padding: '34px', borderRadius: '12px', width: '96px', borderColor: '#d0d0d0' }} />
                                    <input
                                        value={photo} 
                                        onChange={(event) =>
                                            setPhoto(event.target.value)
                                        }
                                        type="file" 
                                        accept=".jpg,.jpeg,.png" 
                                        style={{ display: 'none' }} />
                                </label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <button type="submit" 
                                        class="btn" 
                                        style={{ width: '100%', backgroundColor: 'white', borderRadius: '16px', color: 'black', borderColor: '#7126B5' }}>
                                        Preview
                                    </button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"    
                                        style={{ width: '100%', backgroundColor: '#7126B5', borderRadius: '16px' }}>
                                        Terbitkan
                                        <a onClick={() => navigate("/seller")}></a>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </section>
        </div>
    );
}