import React from "react";

export default function HomePage() {
  return (
    <div className="centerText">
      <p>Welcome to PAFY let`s find your next partner together</p>
      <button>all</button>
      <button>apartment</button>
      <button>studies</button>
      <button>vacation</button>
      <button>general</button>
      <p>פה יופיעו כל הפוסטים</p>
      <p>
        {" "}
        כאשר לוחצים על קטגוריה זה פותח תת קטגוריה לפי הקטגוריה, כלומר אם פתח
        דירה אז ישאל אותו באיזה מקום, אם פתח לימודים ישאל אותו באיזה מקצוע{" "}
      </p>
    </div>
  );
}
