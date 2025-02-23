<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Meta descripción -->
    <meta name="description" content="Únete al Campamento CAF 2025, un retiro espiritual en Cotoca, Santa Cruz. Vive un tiempo de alabanza, predicación y actividades recreativas que fortalecerán tu fe.">
  
    <!-- Meta keywords -->
    <meta name="keywords" content="Retiro espiritual, Campamento cristiano, CAF 2025, retiro de carnaval, retiro cristiano, Santa Cruz, Bolivia, iglesia, alabanzas, predicaciones">

    <!-- Meta Open Graph para compartir en redes sociales -->
    <meta property="og:title" content="{{ config('app.name', 'CAF 2025') }}">
    <meta property="og:description" content="Únete al Campamento CAF 2025 en Cotoca, Santa Cruz. Un tiempo de adoración, predicación y comunión cristiana. ¡Te esperamos!">
    <meta property="og:image" content="{{ asset('images/logo_caf.png') }}">
    <meta property="og:image:alt" content="Imagen promocional del Campamento CAF 2025">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Campamento CAF 2025">
    <meta property="og:locale" content="es_LA">

    <meta property="article:publisher" content="https://www.facebook.com/cristosalvasantacruz" />

    <title inertia>{{ config('app.name', 'CAF 2025') }}</title>

    {{-- Favicon --}}
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
    {{-- <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"> --}}
    <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=League+Spartan:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Campamento CAF 2025",
  "description": "Retiro espiritual de carnaval con alabanzas, predicaciones y actividades recreativas en Santa Cruz, Bolivia.",
  "startDate": "2025-03-01",
  "endDate": "2025-03-04",
  "location": {
    "@type": "Place",
    "name": "Cotoca, Santa Cruz - Bolivia",
    "address": "Cotoca, Santa Cruz, Bolivia"
  },
  "image": "{{ asset('images/event-image.jpg') }}",
  "organizer": {
    "@type": "Organization",
    "name": "CAF 2025",
    "url": "{{ url('/') }}"
  }
}
</script>
</html>
