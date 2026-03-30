Get-ChildItem -Path src -Include *.tsx,*.ts -Recurse -File | ForEach-Object {
    $f = $_.FullName
    $c = Get-Content -LiteralPath $f
    
    # Check if "use client" exists but not at the top
    $hasUseClient = $false
    $newLines = New-Object System.Collections.Generic.List[string]
    $foundUseClient = $false
    
    foreach ($line in $c) {
        if ($line -match '^"use client"|^''use client''') {
            $hasUseClient = $true
            $foundUseClient = $true
            continue
        }
        $null = $newLines.Add($line)
    }
    
    if ($hasUseClient) {
        # Put "use client" at the very top
        $finalContent = @('"use client";', '') + $newLines
        $finalContent | Set-Content -LiteralPath $f
    }
}
