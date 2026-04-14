@echo off
echo Attempting to compile LaTeX resume...
echo.

REM Try different LaTeX compilers
where xelatex >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Found xelatex, attempting to compile...
    xelatex resume.tex
    if %ERRORLEVEL% EQU 0 (
        echo Compilation successful!
        echo PDF should be generated as resume.pdf
    ) else (
        echo Compilation failed with error code %ERRORLEVEL%
    )
) else (
    where pdflatex >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo Found pdflatex, attempting to compile...
        pdflatex resume.tex
        if %ERRORLEVEL% EQU 0 (
            echo Compilation successful!
            echo PDF should be generated as resume.pdf
        ) else (
            echo Compilation failed with error code %ERRORLEVEL%
        )
    ) else (
        echo No LaTeX compiler found.
        echo Please install MiKTeX or TeX Live.
    )
)

pause
