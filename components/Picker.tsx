<Picker
            selectedValue={1}
            onValueChange={(itemValue) => console.log("Selected:", itemValue)}
            className="border rounded-lg bg-gray-100 w-5"
          >
            <Picker.Item label="-- Select Location --" value="" />
            {Locations.map((loc) => (
              <Picker.Item key={loc.id} label={loc.name} value={loc.id} />
            ))}
          </Picker>
          import { Picker } from "@react-native-picker/picker";
          import { Locations } from "@/constants";