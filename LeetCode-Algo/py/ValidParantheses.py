class Solution:
    def isValid(self, s: str) -> bool:
        # 1. Initialize a Stack
        # 2. Process each bracket of the expression one at a time
        # 3. If we encounter an opening bracket, we push it onto the stack
        # 4. If we encounter a closing bracket, then we check the element on top of the stack
        # If element at the top of the stack is an opening bracket of the same type, then we pop it off the stack
        # and continue processing. Else, this implies an invalid expression
        # 5. In the end, if we are left with a stack still having elements, then this implies we have an invalid expression
        
        stack = []
        mapping = {
            ")": "(",
            "}": "{",
            "]": "["
        }
        
        # Iterate through every character/bracket in the expression
        for char in s:
            # If the character is a closing bracket
            if (char in mapping):
                # Pop the topmost element from the stack if it is not empty
                if stack:
                    top_element = stack.pop()
                # Else the stack is empty, so assign some dummy value to the top element    
                else:
                    top_element = '#'
                # If the mapping for the opening bracket in our hash table and the
                # top element of the stack doesn't match, return false
                if (mapping[char] != top_element):
                    return false
                
            # Else we encountered an opening bracket, simply push it onto the stack
            else:
                stack.append(char)
                
        # If the stack is empty, then we have a valid expression    
        return not stack