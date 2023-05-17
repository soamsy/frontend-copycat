set -ex

build_sub_directory() {
    cd $1
    npm install
    npm run build
    mkdir -p ../public/$1
    if [ -d "dist" ]; then
        cp -r dist/* ../public/$1/
    else
        cp -r . ../public/$1/
    fi
    cd ..
}

LINKS=''
for dir in $(ls -d -- [0-9][0-9][0-9]*);do 
    build_sub_directory $dir
    LINKS="$LINKS <a target=\"_blank\" href=\"$dir\">$dir</a>\n"
done

cp index.html public/index.html
sed -i "s|<!-- REPLACEME -->|$LINKS|g" public/index.html