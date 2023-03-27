import React from "react";

const Modal = (props) => {
//   console.log(props.singleUrl);
  const { description, image_link, integrations, features, pricing } = props.singleUrl;
  console.log(pricing);
  const featuresValue = Object.values(features || {}) ;
  console.log(featuresValue);
  const array = ['bg-red-500' ,'bg-green-500', 'bg-black-500']
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-6xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="card card-side bg-base-100 mx-5">
            <div className="card-body w-5/12">
              <h2 className="card-title">{description}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pricing &&
                        pricing.map((singlePrice, index) => <div className={`py-3 px-8 ${array[index]} text-center my-auto`}><p>{singlePrice.price}</p><p>{singlePrice.plan}</p></div>)
                    }
                </div>
              <div className="flex justify-between  mr-10">
                <div>
                  <h2 className="text-lg font-bold">Features</h2>
                  {
                    Object.values(features || {})?.map((singleFeature,index) => <li key={index}>{singleFeature.feature_name}</li>)
                  }
                </div>
                <div>
                  <h2 className="text-lg font-bold">Integrations</h2>
                  {integrations ? 
                    integrations.map((integration, index) => (
                      <li key={index}>{integration ? integration : "No data"}</li>
                    )) : "No data Found"}
                </div>
              </div>
            </div>
            <figure className="w-5/12">
              <img
                className="rounded-2xl"
                src={image_link && image_link[0]}
                alt="Movie"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
