import Image from "next/image";

export function Form() {
  return (
    <div className="px-3">
      <div className="py-4 px-3 rounded-lg shadow-light">
        <div className="flex gap-4">
          <Image
            src="/assets/comercial.png"
            alt="Commercial"
            width={50}
            height={50}
            className="border-2 rounded-full border-secondary"
          />
          <div>
            <p>Michael W Mccallister</p>
            <p className="text-secondary font-semibold">Commercial</p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <label className="text-sm text-secondary">Name</label>
            <div className="mt-2">
              <input
                id="Name"
                type="text"
                name="name"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-secondary">CellPhone</label>
            <div className="mt-2">
              <input
                id="CellPhone"
                type="phone"
                autoComplete="phone"
                name="Phone"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-secondary">Description</label>
            <div className="mt-2">
              <textarea
                rows={3}
                defaultValue={''}
                name="Description"
                className="w-full rounded-md border-0 py-1.5 text-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset text-sm"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 my-4">
            <button className="bg-secondary px-4 py-2 text-white rounded-lg text-sm hover:bg-black/80">Send Message</button>
            <button className="bg-secondary px-4 py-2 text-white rounded-lg text-sm hover:bg-black/80">Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}