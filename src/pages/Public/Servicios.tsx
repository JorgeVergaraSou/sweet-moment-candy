import { useState } from "react";
import {
  Box,
  Card,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { serviciosPrestados } from "../../data/servicios";

export default function Servicios() {
  const [indiceSeleccionado, setIndiceSeleccionado] =
    useState<number | null>(null);

  const abrirImagen = (index: number) => {
    setIndiceSeleccionado(index);
  };

  const cerrarImagen = () => {
    setIndiceSeleccionado(null);
  };

  const siguienteImagen = () => {
    if (indiceSeleccionado === null) return;

    setIndiceSeleccionado(
      (indiceSeleccionado + 1) % serviciosPrestados.length
    );
  };

  const imagenAnterior = () => {
    if (indiceSeleccionado === null) return;

    setIndiceSeleccionado(
      indiceSeleccionado === 0
        ? serviciosPrestados.length - 1
        : indiceSeleccionado - 1
    );
  };

  const telefono = "56962191794";

  const abrirWhatsApp = (titulo: string) => {
    const mensaje = encodeURIComponent(
      `Hola, me interesa el servicio "${titulo}". ¿Podrían brindarme más información?`
    );

    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      "_blank"
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: `url(${import.meta.env.BASE_URL}img/caramelos-fondo.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 6,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(41,40,40,0.5)",
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1400,
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#F28CA4",
            WebkitTextStroke: "0.5px black",
            mb: 5,
          }}
        >
          Nuestros Servicios
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          { serviciosPrestados.map((srv, idx) => (
            <Card
              key={idx}
              onClick={() => abrirImagen(idx)}
              sx={{
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.25)",

                transition: "all .3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 16px 45px rgba(0,0,0,0.35)",
                },
              }}
            >
              <Box
                sx={{
                  p: 2,
                  bgcolor: "#ffffff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={srv.imagen}
                  alt={srv.titulo}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 220,
                      sm: 260,
                      md: 300,
                    },
                    objectFit: "contain",
                    display: "block",
                    transition: "transform .3s ease",
                  }}
                />
              </Box>

              <Box
                sx={{
                  py: 2,
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#F28CA4",
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  {srv.titulo}
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  onClick={(e) => {
                    e.stopPropagation();
                    abrirWhatsApp(srv.titulo);
                  }}
                  sx={{
                    bgcolor: "#25D366",

                    "&:hover": {
                      bgcolor: "#1ea952",
                    },
                  }}
                >
                  Consultar
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* GALERÍA */}
      <Dialog
        open={indiceSeleccionado !== null}
        onClose={cerrarImagen}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            bgcolor: "#000",
            position: "relative",
          }}
        >
          {indiceSeleccionado !== null && (
            <>
              <IconButton
                onClick={imagenAnterior}
                sx={{
                  position: "absolute",
                  left: {
                    xs: 5,
                    md: 20,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  zIndex: 10,

                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
              >
                <ChevronLeftIcon fontSize="large" />
              </IconButton>

              <Box
                component="img"
                src={serviciosPrestados[indiceSeleccionado].imagen}
                alt={serviciosPrestados[indiceSeleccionado].titulo}
                sx={{
                  width: "100%",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <IconButton
                onClick={siguienteImagen}
                sx={{
                  position: "absolute",
                  right: {
                    xs: 5,
                    md: 20,
                  },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  zIndex: 10,

                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
              >
                <ChevronRightIcon fontSize="large" />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                  p: 2,
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {serviciosPrestados[indiceSeleccionado].titulo}
                </Typography>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}