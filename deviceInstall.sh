echo "Starting Installing device in Application"

cd android

./gradlew assembleRelease 

echo "Release assembled"

cd ../app/build/outputs/apk

echo "Installing in device"

adb install app-release.apk
