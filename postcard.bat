REM Postcard.bat: 
REM If you are running this on a PC, this is a Windows batch file you can use to start bjs-postcard' Jekyll Web server.
REM Once you have run this batch file, open up Chrome or Microsoft Edge and browse to  http://127.0.0.1:4000

REM Move to the directory that contains bjs-postcard
REM FYI, %USERPROFILE%\Documents is where the Documents folder is located on your PC (regardless of your username)
REM If this command doesn't work, just replace it with "cd " and the path to the directory where you downloaded bjs-postcard
cd %USERPROFILE%\Documents\GitHub\bjs-postcard

REM Start the Jekyll Web server
REM If this next command doesn't work, it means you haven't properly installed Jekyll and the Ruby programming language; 
REM For more info, see: https://jekyllrb.com/docs/installation/windows/
ECHO bundle exec jekyll serve
jekyll serve

REM In case there's a problem starting the server, using pause let you see the error message
pause