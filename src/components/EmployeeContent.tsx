import { EmployeeCard } from "./EmployeeCard";

export const EmployeeContent = () => {
  return (
    <div className="container">
      <div className="border my-10 grid grid-cols-2 gap-5 p-5 shadow-lg rounded-2xl">
        <EmployeeCard
          workName="Dasturchi"
          age={12}
          fullName="Abdunnur Musaxonov"
          hobbi="AI Video Creator"
          image="/abdunnur.jpg"
        />

        <EmployeeCard
          workName="Dasturchi"
          age={12}
          fullName="Usmon Nurmuhamedov"
          hobbi="-"
          image="/usmon.jpg"
        />

        <EmployeeCard
          workName="Dasturchi"
          age={14}
          fullName="Biloliddin G‘ayratov"
          hobbi="Football"
          image="/bilol.jpg"
        />

        <EmployeeCard
          workName="Dasturchi"
          age={14}
          fullName="Rahmadjonov Ahmadjon"
          hobbi="-"
          image="/axmadjonaka.jpg"
        />

        <EmployeeCard
          workName="Dasturchi"
          age={13}
          fullName="Ibrohim Zikrullayev"
          hobbi="-"
          image="/ibrohim.jpg"
        />

        <EmployeeCard
          workName="Dasturchi"
          age={12}
          fullName="Akbarshoh Ilhomov"
          hobbi="-"
          image="/akbarshoh.jpg"
        />
      </div>
    </div>
  );
};

export default EmployeeContent;
