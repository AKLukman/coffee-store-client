import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, details, photo, category } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      photo,
      category,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "OK!",
          });
        }
      });
  };

  return (
    <div className="p-24 bg-[#F4f3F0]">
      <h2 className="text-3xl font-extrabold text-center mb-4">
        Update a coffee
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex mb-4">
          <div className="md:w-1/2 mr-4">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name
              <input
                type="text"
                name="name"
                className="grow"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available quantity
              <input
                type="text"
                className="grow"
                name="quantity"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:flex mb-4">
          <div className="md:w-1/2 mr-4">
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                name="supplier"
                className="grow"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                className="grow"
                name="taste"
                defaultValue={taste}
              />
            </label>
          </div>
        </div>
        {/* 3rd row */}
        <div className="md:flex mb-4">
          <div className="md:w-1/2 mr-4">
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                name="category"
                className="grow"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                className="grow"
                name="details"
                defaultValue={details}
              />
            </label>
          </div>
        </div>
        {/* 4t row */}
        <div className="mb-4">
          <div className="">
            <label className="input input-bordered flex items-center gap-2">
              Photo URL
              <input
                type="text"
                name="photo"
                className="grow"
                defaultValue={photo}
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update COFFEE"
          className="btn w-full btn-outline"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
