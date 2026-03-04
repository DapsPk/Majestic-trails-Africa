Write-Host "🔧 Fixing unescaped quotes in JSX files..." -ForegroundColor Green

$files = @(
    "src/app/kilimanjaro/page.tsx",
    "src/app/page.tsx",
    "src/app/safari/ngorongoro/page.tsx",
    "src/app/safari/page.tsx",
    "src/app/safari/serengeti/page.tsx",
    "src/app/safari/tarangire/page.tsx",
    "src/app/zanzibar/page.tsx",
    "src/features/destinations/components/TarangireSection.tsx",
    "src/features/hero/components/Hero.tsx",
    "src/features/tours/components/TourCard.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processing $file..." -ForegroundColor Yellow
        $content = Get-Content $file -Raw
        
        # Replace apostrophes in text (but not in JSX attributes)
        $content = $content -replace "(?<=>)([^<]*)'([^<]*)(?=<)", '$1&apos;$2'
        
        # Replace quotes in text
        $content = $content -replace '(?<=>)([^<]*)"([^<]*)(?=<)', '$1&quot;$2'
        
        $content | Set-Content $file
    } else {
        Write-Host "⚠️ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "✅ Done! Fixed quote issues." -ForegroundColor Green