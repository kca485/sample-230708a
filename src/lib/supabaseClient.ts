import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://oqgjqmdbgitzwjsydefc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZ2pxbWRiZ2l0endqc3lkZWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjIxNTYsImV4cCI6MTk5NDc5ODE1Nn0.p_qD_eGKUuEDyfEt-iP_zyE4WYDlMM3jJ18GJWI_E54"
);

export default supabase;