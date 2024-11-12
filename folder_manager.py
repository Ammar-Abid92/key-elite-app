# import os
# import sys
# import shutil

# class FileCreator:
#     def create_folder(self, folder_name):
#         os.makedirs(folder_name, exist_ok=True)

#     def create_file(self, file_path, content):
#         with open(file_path, 'w') as file:
#             file.write(content)

#     def create_component_file_content(self, file_basename):
#         return f'''
# import React from 'react';
# import {{ StyleSheet, Text, View }} from 'react-native';
# import use{file_basename.capitalize()} from './{file_basename}Container';

# export default function {file_basename}() {{
#   const {{}} = use{file_basename.capitalize()}();

#   return (
#     <View style={{styles.container}}>
#       <Text>{file_basename}</Text>
#     </View>
#   );
# }}

# const styles = StyleSheet.create({{ 
#   container: {{
#     flex: 1,
#     justifyContent: 'center',
#     alignItems: 'center',
#   }},
# }});
# '''

#     def create_container_file_content(self, file_basename):
#         return f'''
# import {{ StyleSheet, Text, View }} from 'react-native';
# import React from 'react';

# export default function use{file_basename.capitalize()}() {{
#   return {{}};
# }}
# '''

#     def create_types_file_content(self):
#         return ''

#     def create_files(self, file_names):
#         for file_name in file_names:
#             file_basename = os.path.splitext(os.path.basename(file_name))[0]
#             self.create_folder(file_basename)

#             component_content = self.create_component_file_content(file_basename)
#             container_content = self.create_container_file_content(file_basename)
#             types_content = self.create_types_file_content()

#             self.create_file(os.path.join(file_basename, f'{file_basename}.tsx'), component_content)
#             self.create_file(os.path.join(file_basename, f'{file_basename}Container.ts'), container_content)
#             self.create_file(os.path.join(file_basename, 'types.ts'), types_content)

#             print(f"Files created for {file_basename}")

#     def copy_folder(self, source_folder):
#       try:
#           # Extract folder name from source folder path
#           folder_name = os.path.basename(source_folder)
          
#           # Create the destination folder in the current directory
#           destination_folder = os.path.join(os.getcwd(), folder_name)

#           # Copy the entire contents of the source folder to the destination folder
#           shutil.copytree(source_folder, destination_folder)

          
#           print(f"Folder '{source_folder}' copied to '{destination_folder}' successfully.")
#       except Exception as e:
#           print(f"Error occurred while copying folder: {e}")        

# if __name__ == "__main__":
#     type = sys.argv[1]

#     if type == 'copy':
#         file_creator = FileCreator()
#         file_creator.copy_folder('/Users/aashirraza/Desktop/Tests/rnboilerplate/src')
#     elif type == 'create':
#         if len(sys.argv) < 2:
#           print("No array provided. Usage: python3 create_files.py <file_names_array>")
#           sys.exit(1)

#         file_names = sys.argv[2:]
#         file_creator = FileCreator()
#         file_creator.create_files(file_names)  


import os
import sys
import shutil
import logging

class FolderManager:
    def __init__(self):
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.INFO)
        self.handler = logging.StreamHandler()
        self.handler.setLevel(logging.INFO)
        self.formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
        self.handler.setFormatter(self.formatter)
        self.logger.addHandler(self.handler)

    def create_folder(self, folder_name):
        try:
            os.makedirs(folder_name, exist_ok=True)
            self.logger.info(f"Folder '{folder_name}' created successfully.")
        except Exception as e:
            self.logger.error(f"Error occurred while creating folder '{folder_name}': {e}")

    def create_file(self, file_path, content):
        try:
            with open(file_path, 'w') as file:
                file.write(content)
            self.logger.info(f"File '{file_path}' created successfully.")
        except Exception as e:
            self.logger.error(f"Error occurred while creating file '{file_path}': {e}")

    # Add docstrings to describe what each method does
    def create_component_file_content(self, file_basename):
        return f'''
import React from 'react';
import {{ StyleSheet, Text, View }} from 'react-native';
import use{file_basename.capitalize()} from './{file_basename}Container';

export default function {file_basename}() {{
  const {{}} = use{file_basename.capitalize()}();

  return (
    <View style={{styles.container}}>
      <Text>{file_basename}</Text>
    </View>
  );
}}

const styles = StyleSheet.create({{ 
  container: {{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }},
}});
'''

    def create_container_file_content(self, file_basename):
        return f'''
import {{ StyleSheet, Text, View }} from 'react-native';
import React from 'react';

export default function use{file_basename.capitalize()}() {{
  return {{}};
}}
'''

    def create_types_file_content(self):
        return ''

    def create_files(self, file_names):
        for file_name in file_names:
            file_basename = os.path.splitext(os.path.basename(file_name))[0]
            self.create_folder(file_basename)

            component_content = self.create_component_file_content(file_basename)
            container_content = self.create_container_file_content(file_basename)
            types_content = self.create_types_file_content()

            self.create_file(os.path.join(file_basename, f'{file_basename}.tsx'), component_content)
            self.create_file(os.path.join(file_basename, f'{file_basename}Container.ts'), container_content)
            self.create_file(os.path.join(file_basename, 'types.ts'), types_content)

            self.logger.info(f"Files created for {file_basename}")

    def copy_folder(self, folder):
        try:
            for a in ['src', 'react-native.config.js', 'tsconfig.json' , 'babel.config.js']:
                source_folder = os.path.join(folder, a)
                folder_name = os.path.basename(source_folder)
                destination_folder = os.path.join(os.getcwd(), folder_name)

                        # Check if the source is a file
                if os.path.isfile(source_folder):
                    # If source is a file, copy it directly to the destination directory
                    shutil.copy(source_folder, destination_folder)
                else:
                    # If source is a directory, copy its entire contents to the destination directory
                    shutil.copytree(source_folder, destination_folder, dirs_exist_ok=True)

                self.logger.info(f"Folder '{source_folder}' copied to '{destination_folder}' successfully.")
        except Exception as e:
            self.logger.error(f"Error occurred while copying folder: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 create_files.py <action> [arguments]")
        sys.exit(1)

    action = sys.argv[1]
    folder_manager = FolderManager()

    if action == 'copy':
        if len(sys.argv) != 3:
            print("Usage: python3 create_files.py copy <source_folder>")
            sys.exit(1)
        source_folder = sys.argv[2]
        folder_manager.copy_folder(source_folder)
    elif action == 'create':
        if len(sys.argv) < 3:
            print("Usage: python3 create_files.py create <file_names>")
            sys.exit(1)
        file_names = sys.argv[2:]
        folder_manager.create_files(file_names)
    else:
        print("Invalid action. Use 'copy' or 'create'.")
