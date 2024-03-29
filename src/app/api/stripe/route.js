import AuthUser from "@/middleware/AuthUser";
import { NextResponse } from "next/server";
import { apiURL } from "@/utils";

const stripe = require("stripe")(
  "sk_test_51ODCHRSC2fltmekGNZcI3E79FSvw3RnAHu6iPyofHb7K3M4IDkAJrpgo7JUc1WrLzhQlfZfFVrA4WIfXdgoo4NkK00DatfnPIP"
);

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const res = await req.json();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: res,
        mode: "payment",
        success_url: apiURL + "/checkout" + "?status=success",
        cancel_url: apiURL + "/checkout" + "?status=cancel",
      });

      return NextResponse.json({
        success: true,
        id: session.id,
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
