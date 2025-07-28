import { ProfileItem } from '.';

const Records = () => {
  return (
    <div className="flex flex-col gap-10 sm:pb-[53px] lg:px-10">
      <div>
        <p className="border-b border-[#1D1D1D1A] py-4 text-sm leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
          Basic health information
        </p>
        <ProfileItem title="Blood Group">--</ProfileItem>
        <ProfileItem title="Blood Type">B+</ProfileItem>
        <ProfileItem title="Genotype">AA</ProfileItem>
        <ProfileItem title="BMI">--</ProfileItem>
        <ProfileItem title="Height">--</ProfileItem>
        <ProfileItem title="Weight">--</ProfileItem>
        <ProfileItem title="Smoker">--</ProfileItem>
        <ProfileItem title="Alcohol Use">--</ProfileItem>
      </div>
      <div>
        <p className="border-b border-[#1D1D1D1A] py-4 text-sm leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
          Medical History
        </p>
        <ProfileItem title="Allergies">
          Penicillin, Penicillin, Penicillin
        </ProfileItem>
        <ProfileItem title="Chronic Conditions">Asthma</ProfileItem>
        <ProfileItem title="Surgical History">AA</ProfileItem>
        <ProfileItem title="Family History">Hypertension</ProfileItem>
        <ProfileItem title="Medication History">--</ProfileItem>
        <ProfileItem title="Vaccination Records">
          Hep B, COVID-19, Tetanus
        </ProfileItem>
      </div>

      <div className="leading-[22px] tracking-tight text-[#7C7C7C]">
        <p className="border-b border-[#1D1D1D1A] py-4 text-sm leading-[22px] font-medium tracking-tight text-[#1D1D1D]">
          Last Clinical Records
        </p>
        <ProfileItem title="Blood Pressure">
          118/76 mmHg <span>July 4, 2025</span>
        </ProfileItem>
        <ProfileItem title="Heart Rate">
          72 bpm <span>July 4, 2025</span>
        </ProfileItem>
        <ProfileItem title="Lab Test">
          Typhoid IgM Positive <span>July 4, 2025</span>
        </ProfileItem>
        <ProfileItem title="Doctor Notes">
          Mild typhoid detected. Prescribed antibiotics for 7 days.
        </ProfileItem>
        <ProfileItem title="Diagnosis History">
          Typhoid Fever <span>July 4, 2025</span>
        </ProfileItem>
      </div>
    </div>
  );
};

export default Records;
