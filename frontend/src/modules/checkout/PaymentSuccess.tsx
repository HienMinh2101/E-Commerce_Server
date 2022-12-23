import { Box, Button, Dialog, DialogContent, Divider, Stack, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import { Iconify } from "~/components";
import { clearCart } from "~/redux/features/cartSlice";
import { reset } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import Payment from "./Payment";

const DialogStyle = styled(Dialog)(() => ({
  "& .MuiBackdrop-root": {
    background: "rgb(33 43 54 / 80%);",
  },
  padding: "24px",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  maxWidth: "550px",
  textAlign: "center",
  color: theme.palette.text.primary,
  height: "100%",
}));

function PaymentSuccess() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleFinish = () => {
    dispatch(clearCart());
    dispatch(reset());
    navigate(publicRoutes.PRODUCT.path);
  };

  return (
    <Fragment>
      <Payment />

      <DialogStyle open fullScreen>
        <DialogContent>
          <ContentStyle>
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }} color="primary">
              Cảm ơn bạn đã mua hàng!
            </Typography>
            <Box sx={{ mt: "40px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360" width="100%" height="100%">
                <defs>
                  <linearGradient id="BG" x1="19.496%" x2="77.479%" y1="71.822%" y2="16.69%">
                    <stop offset="0%" stopColor="#2065D1"></stop>
                    <stop offset="100%" stopColor="#2065D1" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#BG)"
                  d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z"
                  opacity="0.2"
                ></path>
                <image
                  height="300"
                  x="300"
                  y="30"
                  href="https://minimals.cc/assets/illustrations/characters/character_10.png"
                ></image>
                <path
                  fill="#DFE3E8"
                  d="M253.579 162.701a5.06 5.06 0 01-4.861-3.646l-15.033-53.327a16.19 16.19 0 00-15.276-12.007h-78.471a16.174 16.174 0 00-15.325 11.995l-14.985 53.29a5.06 5.06 0 01-6.164 3.266 5.055 5.055 0 01-3.558-6l14.985-53.291a26.31 26.31 0 0125.047-19.347h78.471a26.327 26.327 0 0124.998 19.36l14.985 53.29a5.054 5.054 0 01-3.5 6.222 4.786 4.786 0 01-1.313.195z"
                ></path>
                <path
                  fill="url(#paint0_linear_1_68)"
                  d="M244.501 272.368H113.846a10.329 10.329 0 01-10.245-9.017l-12.153-95.716H266.85l-12.153 95.716a10.3 10.3 0 01-10.196 9.017z"
                ></path>
                <path
                  fill="url(#paint1_linear_1_68)"
                  d="M268.151 155.117H90.196c-5.631 0-10.196 4.565-10.196 10.196v.887c0 5.632 4.565 10.197 10.196 10.197h177.955c5.631 0 10.196-4.565 10.196-10.197v-.887c0-5.631-4.565-10.196-10.196-10.196z"
                ></path>
                <path
                  fill="#061B64"
                  d="M128.66 184.017h-.012a7.874 7.874 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.875 7.875 0 007.875-7.875v-58.431a7.875 7.875 0 00-7.875-7.875zm33.675 0h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.876 7.876 0 007.876-7.875v-58.431a7.875 7.875 0 00-7.876-7.875zm33.688 0h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.876 7.876 0 007.876-7.875v-58.431a7.875 7.875 0 00-7.876-7.875zm33.676 0h-.012a7.875 7.875 0 00-7.875 7.875v58.431a7.875 7.875 0 007.875 7.875h.012a7.875 7.875 0 007.875-7.875v-58.431a7.875 7.875 0 00-7.875-7.875z"
                ></path>
                <path
                  fill="url(#paint2_linear_1_68)"
                  d="M202.793 80h-47.239a8.762 8.762 0 00-8.762 8.762v.012a8.762 8.762 0 008.762 8.763h47.239a8.762 8.762 0 008.762-8.763v-.012A8.762 8.762 0 00202.793 80z"
                ></path>
                <path
                  fill="#fff"
                  d="M254.289 279.577c23.907 0 43.288-19.381 43.288-43.288 0-23.908-19.381-43.289-43.288-43.289C230.381 193 211 212.381 211 236.289c0 23.907 19.381 43.288 43.289 43.288z"
                ></path>
                <path
                  fill="url(#paint3_linear_1_68)"
                  d="M243.999 256.002l-15.183-16.746a3.15 3.15 0 01.214-4.444l4.219-3.833a3.146 3.146 0 014.444.214l9.144 10.065 25.184-23.417a3.149 3.149 0 014.444.16l3.876 4.176a3.146 3.146 0 01.843 2.255 3.148 3.148 0 01-1.004 2.189l-31.758 29.531a3.119 3.119 0 01-4.423-.15z"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_68"
                    x1="267"
                    x2="80.541"
                    y1="272"
                    y2="247.455"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2065D1"></stop>
                    <stop offset="1" stopColor="#103996"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_68"
                    x1="80"
                    x2="80"
                    y1="155.117"
                    y2="176.397"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#76B0F1"></stop>
                    <stop offset="1" stopColor="#103996"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_68"
                    x1="146.792"
                    x2="146.792"
                    y1="80"
                    y2="97.537"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#76B0F1"></stop>
                    <stop offset="1" stopColor="#103996"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_68"
                    x1="228"
                    x2="228"
                    y1="217"
                    y2="257"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#76B0F1"></stop>
                    <stop offset="1" stopColor="#103996"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Box sx={{ mt: "40px" }}>
              <Typography variant="h6" fontWeight={600}>
                Cảm ơn đã đặt hàng
              </Typography>
              <br />
              <Typography variant="body1">
                Chúng tôi sẽ gửi thông báo cho bạn trong vòng 5 ngày khi hàng được giao.
                <br />
                Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào thì hãy liên hệ với chúng tôi.
                <br />
                <br />
                <Typography variant="body1" textAlign="center" fontWeight={500}>
                  Chân thành cám ơn
                </Typography>
              </Typography>
            </Box>
            <Divider sx={{ mt: "40px", borderStyle: "dashed" }} />
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Button variant="outlined" size="large" onClick={handleFinish}>
                <Iconify icon="ic:outline-keyboard-arrow-left" sx={{ fontSize: 20 }} />
                Tiếp tục mua sắm
              </Button>
            </Stack>
          </ContentStyle>
        </DialogContent>
      </DialogStyle>
    </Fragment>
  );
}

export default PaymentSuccess;
