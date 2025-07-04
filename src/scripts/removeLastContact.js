import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log("⚠️ Немає контактів для видалення.");
      return;
    }

    const updatedContacts = contacts.slice(0, -1); 

    await writeContacts(updatedContacts);

    console.log("✅ Останній контакт успішно видалено.");
  } catch (error) {
    console.error("❌ Помилка при видаленні останнього контакту:", error);
  }
};

removeLastContact();
