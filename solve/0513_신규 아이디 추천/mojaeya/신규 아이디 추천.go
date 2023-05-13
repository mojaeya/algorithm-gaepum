package main

import (
	"fmt"
	"regexp"
	"strings"
)

func main() {
	newID := "...!@BaT#*..y.abcdefghijklm"
	// newID := "=.="

	answer := ""
	answer = strings.ToLower(newID)                                     // 1단계
	answer = regexp.MustCompile(`[^\w.-]`).ReplaceAllString(answer, "") // 2단계
	answer = regexp.MustCompile(`\.+`).ReplaceAllString(answer, ".")    // 3단계
	answer = strings.Trim(answer, ".")                                  // 4단계

	switch {
	case len(answer) == 0:
		answer = "a"
	case len(answer) >= 16:
		answer = answer[:15]
		answer = strings.TrimRight(answer, ".")
	}

	for len(answer) <= 2 { // 2자 이하면 마지막 문자를 길이가 3이 될 때까지 반복
		answer += answer[len(answer)-1:]
	}

	fmt.Println(answer)
}
