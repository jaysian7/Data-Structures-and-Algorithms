class Solution:
    def isPalindrome(self, s: str) -> bool:

        filtered_chars = filter(lambda ch: ch.isalnum(), s)
        lowercase_filtered_chars = map(lambda ch: ch.lower(), filtered_chars)

        filtered_chars_list = list(lowercase_filtered_chars)
        reversed_chars_list = filtered_chars_list[::-1]

        return filtered_chars_list == reversed_chars_list


        # Since only alphanumeric characters are considered, we'll filter out all other types of characters before we apply our algorithm
        # Since letters are case-insensitive, we'll convert the remaining letters to lower case. Digits will be left the same
        # Time Complexity: O(n) , we iterate thrice through the string:
        # 1. When we filter out non-alphanumeric characters, and convert the remaining characters to lower-case
        # 2. When we reverse the string
        # 3. When we compare the original and reversed strings
        # Space Complexity: O(n) , we need O(n) additional space to store the filtered string and the reversed string.