export const formDate = (date) =>
    (new Date(date).toLocaleString("ru", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }));

export const checkDatePattern = (str) => {
  let reg = new RegExp('^[0-9-]{0,10}$');
  return reg.test(str);
};

export const getStringAboutPerson = (person = {}) => {
  let about = [];
  if(person.is_pregnancy){
     about.push("Беременность");
  }
    if(person.is_alcohol){
        about.push("Алкогольное опьянение");
    }
    if(person.is_study_abroad){
        about.push("Обучение за рубежем");
    }
    if(person.is_chronic_disease){
        about.push("Хронические заболевания");
    }
    if(person.is_treatment){
        about.push("Лечение в РФ");
    }
    if(person.is_full_package){
        about.push("Полный пакет");
    }

    return about.join(", ");
};