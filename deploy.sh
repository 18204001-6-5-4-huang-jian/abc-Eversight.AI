#!/bin/bash


dir=`dirname $0`

export time=`date +"%Y%m%d%H%M%S"`

PROFILE=":dev"



env="$1"
echo "env: $env"

while [ $# -gt 0 ]; do
    case "$env" in
        --prod)
            PROFILE=":prod"
            shift
            ;;
        --pre)
            PROFILE=":pre"
            shift
            ;;
        --dev)
            PROFILE=""
            shift
            ;;
        *)
            break
            ;;
    esac
done


function compile() {
    echo "build war..."
    chmod +x $dir/gradlew
    $dir/gradlew war
    if [ $? -ne 0 ]; then
        echo "Compile error!" 1>&2
        exit 1
    fi
}

function main() {
    compile
    echo "Done!"
}

main

exit 0
