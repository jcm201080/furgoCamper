import requests
import qrcode

def obtener_url_ngrok():
    try:
        res = requests.get("http://127.0.0.1:4040/api/tunnels")
        datos = res.json()
        for tunel in datos['tunnels']:
            if tunel['proto'] == 'https':
                return tunel['public_url']
    except Exception as e:
        print("❌ No se pudo obtener la URL de Ngrok.")
        print("👉 Asegúrate de que Ngrok esté corriendo.")
        print(e)
    return None

# Obtener la URL activa
url = obtener_url_ngrok()

if url:
    print(f"✅ URL pública detectada: {url}")
    img = qrcode.make(url)
    img.save("qr_camper.png")
    print("📸 Código QR generado y guardado como 'qr_camper.png'")
else:
    print("❌ No se generó el código QR.")
