import {Staff} from "@/lib/types";
import Person from "@/components/Person";

export default function Staff({staff}: {
  staff: Staff[];
}) {
  return (
    <div className={"grid grid-cols-3 gap-4"}>
      {staff.map((staff, index) => (
        <Person id={staff.people_id} name={staff.name} description={staff.positions.join(", ")} image={staff.image} key={index}/>
      ))}
    </div>
  )
}
